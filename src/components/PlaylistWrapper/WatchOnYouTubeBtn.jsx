import React from 'react'
import { EmbedPDF } from '@simplepdf/react-embed-pdf'
import 'bootstrap-icons/font/bootstrap-icons.css'

function WatchOnYouTubeBtn({ ytList, chordsheetName, name }) {
  const { fields } = chordsheetName || {}
  return (
    <div className="card-footer d-flex flex-wrap justify-content-center align-items-center gap-2 gap-md-3 py-3">
      <a
        className="col-12 col-md-6 btn btn-outline-info text-uppercase"
        href={ytList}
        target="_blank"
      >
        <i className="bi bi-play-btn-fill"></i> Lista de Videos
      </a>
      <div className="flex-fill flex-md-grow-0">
        {fields && (
          <EmbedPDF>
            <a
              className="btn btn-outline-warning text-uppercase"
              href={fields.file.url}
            >
              <i className="bi bi-music-note-list"></i> Ver Acordes
            </a>
          </EmbedPDF>
        )}
      </div>
    </div>
  )
}

export default WatchOnYouTubeBtn
