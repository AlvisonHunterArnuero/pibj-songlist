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
      {`${thumbCaptionText || 'Haga click en la imagen de arriba para descubrir el video'}`}
    </div>
  )
}

export default ThumbCaption
