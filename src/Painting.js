import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import YTFrame from './components/YTFrame'
const Painting = ({ name, image, alt, artist, songList, spotifyList }) => {
  const [showVideoList, setShowVideoList] = useState(true)
  return (
    <>
      <figure className="painting">
        {showVideoList ? (
          <img
            className="image-thumb"
            src={image}
            alt={alt}
            onClick={(e) => setShowVideoList(!showVideoList)}
          />
        ) : (
          <YTFrame youTubeLink={spotifyList} />
        )}
        <h4>{name}</h4>
        <p>
          <i>{artist}</i>
        </p>
      </figure>
      <div>
        <ReactMarkdown>{songList}</ReactMarkdown>
        <a className="spotify" href={spotifyList} target="_blank">
          {' '}
          💻 Abrir esta lista en YouTube
        </a>
      </div>
    </>
  )
}

export default Painting
