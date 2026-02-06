import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { Spinner } from '@contentful/f36-spinner'
import { createClient } from 'contentful'
import PlaylistWrapper from './components/PlaylistWrapper/index'
import SearchBar from './components/SearchBar'
import FilterControls from './components/FilterControls'
import NoResults from './components/NoResults'
import SkeletonCard from './components/SkeletonCard'
import TopHeader from './TopHeader'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
})

const fetcher = async () => {
  const entryItems = await client.getEntries({ content_type: 'painting' })
  const tagItems = await client.getTags()
  const tags = tagItems.items.map((tag) => tag.name)

  // Process the data from the Contentful REST API into a neater object
  // If you want to avoid this step, consider using the GraphQL API
  const entries = entryItems.items.map((entry) => {
    const { fields } = entry
    return {
      name: fields.name,
      songList: fields.lista,
      spotifyList: fields.spotifyList,
      image: fields.image.fields.file.url,
      alt: fields.image.fields.title,
      artist: fields.artist.fields.name,
      chordsheetName: fields.chordsheetName ? fields.chordsheetName : 'Acordes',
      tags: entry.metadata.tags
        .map((t) => tagItems.items.find((ti) => ti.sys.id === t.sys.id))
        .map((t) => t.name),
    }
  })

  return { entries, tags }
}

function App() {
  const [selectedTags, setSelectedTags] = useState([])
  const [filterMode, setFilterMode] = useState('OR')
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const { data, error } = useSWR('contentful', fetcher)

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Load filters from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlSearch = params.get('q')
    const urlTags = params.get('tags')
    const urlMode = params.get('mode')

    if (urlSearch) setSearchQuery(urlSearch)
    if (urlTags) setSelectedTags(urlTags.split(',').filter(Boolean))
    if (urlMode && (urlMode === 'OR' || urlMode === 'AND'))
      setFilterMode(urlMode)
  }, [])

  // Update URL when filters change
  useEffect(() => {
    if (!data) return // Don't update URL until data is loaded

    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (selectedTags.length) params.set('tags', selectedTags.join(','))
    if (filterMode !== 'OR') params.set('mode', filterMode)

    const queryString = params.toString()
    const newUrl = queryString ? `?${queryString}` : window.location.pathname

    window.history.replaceState({}, '', newUrl)
  }, [searchQuery, selectedTags, filterMode, data])

  if (error) {
    return <div className="text-center mt-5">failed to load {error} </div>
  }

  if (!data) {
    return (
      <div className="text-center mt-5 fade-in">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    )
  }

  const { tags, entries } = data

  // Filter function for search
  const matchesSearch = (playlist) => {
    if (!debouncedSearch) return true

    const query = debouncedSearch.toLowerCase()
    const name = (playlist.name || '').toLowerCase()
    const artist = (playlist.artist || '').toLowerCase()
    const songs = (playlist.songList || '').toLowerCase()

    return (
      name.includes(query) || artist.includes(query) || songs.includes(query)
    )
  }

  // Filter function for tags
  const matchesTags = (playlist) => {
    if (selectedTags.length === 0) return true

    if (filterMode === 'OR') {
      // OR mode: Show if playlist has ANY selected tag
      return playlist.tags.some((tag) => selectedTags.includes(tag))
    } else {
      // AND mode: Show if playlist has ALL selected tags
      return selectedTags.every((tag) => playlist.tags.includes(tag))
    }
  }

  const onTagSelected = (e) => {
    const { name: tag, checked } = e.target
    const index = selectedTags.indexOf(tag)

    if (checked && index === -1) {
      selectedTags.push(tag)
    } else if (index !== -1) {
      selectedTags.splice(index, 1)
    }
    setSelectedTags(selectedTags.slice())
  }

  const handleClearAll = () => {
    setSearchQuery('')
    setSelectedTags([])
  }

  const handleSelectAll = () => {
    setSelectedTags([...tags])
  }

  const handleDeselectAll = () => {
    setSelectedTags([])
  }

  const TagsFilter = tags.map((tag) => {
    const isChecked = selectedTags.includes(tag)
    return (
      <div className="tag-filter-item" key={tag}>
        <input
          className="custom-checkbox"
          type="checkbox"
          value=""
          checked={isChecked}
          onChange={onTagSelected}
          name={tag}
          id={tag}
        />
        <label htmlFor={tag}>{tag}</label>
      </div>
    )
  })

  // Apply all filters
  const filteredPlaylists = entries.filter(
    (playlist) => matchesSearch(playlist) && matchesTags(playlist)
  )

  const RenderPlaylist =
    filteredPlaylists.length > 0 ? (
      <div className="content-transition">
        {filteredPlaylists.map(
          (
            {
              name,
              image,
              alt,
              artist,
              songList,
              spotifyList,
              chordsheetName,
              tags,
            },
            i
          ) => {
            return (
              <PlaylistWrapper
                key={i}
                name={name}
                image={image}
                alt={alt}
                artist={artist}
                songList={songList}
                spotifyList={spotifyList}
                chordsheetName={chordsheetName}
                tags={tags}
              ></PlaylistWrapper>
            )
          }
        )}
      </div>
    ) : (
      <NoResults
        onClearFilters={handleClearAll}
        hasFilters={searchQuery || selectedTags.length > 0}
      />
    )

  const activeFilterCount =
    (searchQuery ? 1 : 0) + (selectedTags.length > 0 ? 1 : 0)

  return (
    <main>
      <TopHeader />

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onClear={() => setSearchQuery('')}
      />

      <div className="filter-section slide-in-right">
        <div className="filter-label">
          🏷️ <span>Filtrar por Tags:</span>
        </div>

        <FilterControls
          filterMode={filterMode}
          onModeChange={setFilterMode}
          activeCount={activeFilterCount}
          onClearAll={handleClearAll}
          onSelectAll={handleSelectAll}
          onDeselectAll={handleDeselectAll}
          hasSelection={selectedTags.length > 0}
        />

        <div className="d-flex flex-wrap">{TagsFilter}</div>
      </div>

      <div className="result-count">
        Mostrando {filteredPlaylists.length} de {entries.length} Listas de
        alabanzas
      </div>

      <div>{RenderPlaylist}</div>
    </main>
  )
}

export default App
