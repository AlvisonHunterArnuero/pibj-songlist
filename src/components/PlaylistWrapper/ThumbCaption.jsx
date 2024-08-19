import React from 'react'

function ThumbCaption({ thumbCaptionText }) {
  const smallCaption = {
    display: 'block',
    marginTop: '12px',
    fontSize: '12px',
    color: '#ccc',
  }
  return (
    <div style={smallCaption}>
      {`${thumbCaptionText} || Haga click en la imagen para reproducir el video`}
    </div>
  )
}

export default ThumbCaption
