import React from 'react'
import { EmbedPDF } from '@simplepdf/react-embed-pdf'
import 'bootstrap-icons/font/bootstrap-icons.css'

function WatchOnYouTubeBtn({ ytList, chordsheetName, name }) {
  const { fields } = chordsheetName || {}
  return (
    <div className="card-footer d-flex flex-column flex-xl-row justify-content-center align-items-center gap-2 gap-md-3 py-3">
      <a
        className="btn btn-gradient-primary text-uppercase w-100 w-xl-50"
        href={ytList}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-play-btn-fill me-2"></i>Lista de Videos
      </a>
      {fields && (
        <EmbedPDF>
          <a
            className="btn btn-gradient-accent text-uppercase w-100 w-xl-50"
            href={fields.file.url}
          >
            <i className="bi bi-music-note-list me-2"></i>Ver Acordes
          </a>
        </EmbedPDF>
      )}
    </div>
  )
}

export default WatchOnYouTubeBtn
