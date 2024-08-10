const YTFrame = ({ youTubeLink }) => {
  return (
    <>
      <iframe
        width="640"
        height="365"
        src={youTubeLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  )
}

export default YTFrame
