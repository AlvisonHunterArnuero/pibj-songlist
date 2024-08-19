import React from 'react'

function WatchOnYouTubeBtn({ ytList, name }) {
  return (
    <a
      className="spotify btn btn-outline-info w-100"
      href={ytList}
      target="_blank"
    >
      📺 {name} en YouTube
    </a>
  )
}

export default WatchOnYouTubeBtn
