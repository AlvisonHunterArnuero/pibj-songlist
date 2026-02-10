const decoderElement =
  typeof document !== 'undefined' ? document.createElement('textarea') : null

/**
 * Decodes HTML entities back into plain text using a temporary DOM element.
 * * This is particularly useful for cleaning up URLs or text that may contain
 * sequences like `&amp;`, `&lt;`, or `&quot;`.
 * * @note This function requires a browser environment (DOM). It will not work in Node.js.
 * * @param {string} [value=''] - The HTML-encoded string to decode.
 * @returns {string} The decoded plain-text string.
 * * @example
 * const encoded = "https://youtube.com/list?id=123&amp;index=1";
 * const decoded = decodePlaylistHtml(encoded);
 * // Result: "https://youtube.com/list?id=123&index=1"
 */

const decodePlaylistHtml = (value = '') => {
  if (!decoderElement) return value
  decoderElement.innerHTML = value
  return decoderElement.value
}

/**
 * Extracts the playlist ID (list=) from any YouTube URL format.
 * @param {string} urlString - The YouTube URL to parse.
 * @returns {string|null} - The Playlist ID or null if not found.
 */
function getYouTubePlaylistId(urlString) {
  try {
    // 1. Handle potential HTML encoding (converting &amp; to &)
    const cleanUrl = urlString.replace(/&amp;/g, '&')

    // 2. Parse the URL
    const url = new URL(cleanUrl)

    // 3. Extract the 'list' parameter
    return url.searchParams.get('list')
  } catch (error) {
    console.error('Invalid URL provided:', error)
    return null
  }
}

export { decodePlaylistHtml, getYouTubePlaylistId }
