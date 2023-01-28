import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import YTFrame from './components/YTFrame'
const Painting = ({ name, image, alt, artist, songList, spotifyList }) => {
  const [showVideoList, setShowVideoList] = useState(true)
  return (
    <div className='container my-4'>
      <div className='row align-items-top justify-content-between'>
      <div className='col-12 col-md-7'>
      <figure className="">
        {showVideoList ? (
          <img
            className="image-thum"
            src={image}
            alt={alt}
            onClick={(e) => setShowVideoList(!showVideoList)}
          />
        ) : (
          <YTFrame youTubeLink={spotifyList} />
        )}
      </figure>
      </div>

      <div className='col-12 col-md-5'>
        <div className="card text-white bg-dark mb-3">
          <h5 className="card-header lead fs-6 fw-bolder text-info mx-auto">
          {name} - Dirige <i>{artist}</i>
          </h5>
          <div className="card-body">
            <ReactMarkdown>{songList}</ReactMarkdown>
            <a
              className="spotify btn btn-outline-warning w-100"
              href={spotifyList}
              target="_blank"
            >
              {' '}
              💻 Abrir esta lista en YouTube
            </a>
          </div>
        </div>
      </div>



      </div>
    </div>
  )
}

export default Painting
