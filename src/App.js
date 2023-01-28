import useSWR from 'swr'
import { useState } from 'react'
import { Spinner } from '@contentful/f36-spinner'
import { createClient } from 'contentful'
import Painting from './Painting'
import Content from './Content'

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
    console.log("==>",fields, entry)
    return {
      name: fields.name,
      songList: fields.lista,
      spotifyList: fields.spotifyList,
      image: fields.image.fields.file.url,
      alt: fields.image.fields.title,
      artist: fields.artist.fields.name,
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
    console.log(error)
    return <div>failed to load </div>
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

  const checkboxes = tags.map((tag) => {
    return (
      <div className="form-check form-check-inline mx-2">
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


  const paintings = entries
    .filter((painting) => {
      if (selectedTags.length === 0) return true
      const found = painting.tags.some((r) => selectedTags.includes(r))
      return found
    })
    .map(({ name, image, alt, artist, songList,spotifyList }, i) => {
      return (
        <Painting
          key={i}
          name={name}
          image={image}
          alt={alt}
          artist={artist}
          songList={songList}
          spotifyList={spotifyList}
        ></Painting>
      )
    })

  return (
    <main>
      <Content />
      <p className="r">
        👉<b>Song Genre:</b>:{checkboxes}
      </p>
      <div className="gri">{paintings}</div>
    </main>
  )
}

export default App
