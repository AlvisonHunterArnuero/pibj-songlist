const decodePlaylistHtml = (value = '') => {
  const txt = document.createElement('textarea')
  txt.innerHTML = value
  return txt.value
}
export { decodePlaylistHtml }
