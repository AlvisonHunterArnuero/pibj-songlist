import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import YTFrame from '../YTFrame'
import ThumbCaption from './ThumbCaption'
import WatchOnYouTubeBtn from './WatchOnYouTubeBtn'
const PlaylistWrapper = ({
  name,
  image,
  alt,
  artist,
  songList,
  spotifyList,
  chordsheetName,
}) => {
  const [showVideoList, setShowVideoList] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="container my-4">
      <div className="row align-items-top justify-content-between">
        <div className="col-12 col-md-7">
          {showVideoList ? (
            <img
              style={{
                cursor: 'pointer',
                border: isHovered ? '2px solid #0dcaf0' : 'none',
              }}
              src={image}
              alt={alt}
              onClick={(e) => setShowVideoList(!showVideoList)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          ) : (
            <YTFrame youTubeLink={spotifyList} />
          )}
          <ThumbCaption />
        </div>

        <div className="col-12 col-md-5">
          <div className="card text-white bg-dark mb-3">
            <div className="card-body">
              <ReactMarkdown>{songList}</ReactMarkdown>
            </div>
            <WatchOnYouTubeBtn
              ytList={spotifyList}
              name={name}
              chordsheetName={chordsheetName}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaylistWrapper
