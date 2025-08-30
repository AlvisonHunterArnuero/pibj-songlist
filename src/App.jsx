import useSWR from 'swr'
import { useState } from 'react'
import { Spinner } from '@contentful/f36-spinner'
import { createClient } from 'contentful'
import PlaylistWrapper from './components/PlaylistWrapper/index'
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
  const { data, error } = useSWR('contentful', fetcher)

  if (error) {
    return <div>failed to load {error} </div>
  }
  if (!data) return <Spinner size="large" />

  const { tags, entries } = data

  const onTagSelected = (e) => {
    const { name: tag, checked } = e.target
    const index = selectedTags.indexOf(tag)

    if (checked && index === -1) {
      selectedTags.push(tag)
    } else if (index !== -1) {
      // if the tag is already in the array, remove it
      selectedTags.splice(index, 1)
    }
    setSelectedTags(selectedTags.slice())
  }

  const TagsFilter = tags.map((tag) => {
    return (
      <div className="form-check form-check-inline mx-2" key={tag}>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          onChange={onTagSelected}
          name={tag}
          id={tag}
        />
        <label className="form-check-label" htmlFor={tag} key={tag}>
          {tag}
        </label>
      </div>
    )
  })

  const RenderPlaylist = entries
    .filter((playlist) => {
      if (selectedTags.length === 0) return true
      const found = playlist.tags.some((r) => selectedTags.includes(r))
      return found
    })
    .map(
      (
        { name, image, alt, artist, songList, spotifyList, chordsheetName },
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
          ></PlaylistWrapper>
        )
      }
    )

  return (
    <main>
      <TopHeader />
      <div className="align-items-center w-100">
        🏷️ <b> Filtrar por Tags:</b>:{TagsFilter}
      </div>
      <div className="">{RenderPlaylist}</div>
    </main>
  )
}

export default App
