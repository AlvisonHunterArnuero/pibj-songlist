import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import YTFrame from '../YTFrame'
import ThumbCaption from './ThumbCaption'
import WatchOnYouTubeBtn from './WatchOnYouTubeBtn'
import TagPills from './TagPills'
import { decodePlaylistHtml } from '../../utils'

const PlaylistWrapper = ({
  name,
  image,
  alt,
  artist,
  songList,
  spotifyList,
  chordsheetName,
  tags,
}) => {
  const [showVideoList, setShowVideoList] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const cleanYouTubeUrl = decodePlaylistHtml(spotifyList)

  return (
    <div className="playlist-card fade-in-up">
      <div className="container my-4">
        <div className="row align-items-top justify-content-between">
          <div className="col-12 col-md-7">
            <div
              className="playlist-image-container"
              onClick={() => setShowVideoList(!showVideoList)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {showVideoList ? (
                <>
                  <img src={image} alt={alt} className="smooth-transition" />
                  <div className="playlist-image-overlay"></div>
                </>
              ) : (
                <YTFrame youTubeLink={cleanYouTubeUrl} />
              )}
            </div>
            <ThumbCaption />
            {tags && tags.length > 0 && <TagPills tags={tags} maxDisplay={3} />}
          </div>

          <div className="col-12 col-md-5">
            <div
              className="card text-white bg-dark mb-3"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
              }}
            >
              <div className="card-header text-uppercase text-info small">
                {name} - Culto Evangelico
              </div>
              <div className="card-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {songList}
                </ReactMarkdown>
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
    </div>
  )
}

export default PlaylistWrapper
