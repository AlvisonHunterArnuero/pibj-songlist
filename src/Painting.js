import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import YTFrame from './components/YTFrame'
const Painting = ({ name, image, alt, artist, songList, spotifyList }) => {
  const [showVideoList, setShowVideoList] = useState(true)
  const smallCaption = {
    display: 'block',
    marginTop: '12px',
    fontSize: '12px',
    color: '#ccc',
  }
  return (
    <div className="container my-4">
      <div className="row align-items-top justify-content-between">
        <div className="col-12 col-md-7">
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
          <div style={smallCaption} classname="small-caption">
            Haga click en la imagen para reproducir el video
          </div>
        </div>

        <div className="col-12 col-md-5">
          <div className="card text-white bg-dark mb-3">
            <a
              className="spotify btn btn-outline-info w-100"
              href={spotifyList}
              target="_blank"
            >
              Ver {name} en YouTube
            </a>
            <div className="card-body">
              <ReactMarkdown>{songList}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Painting
