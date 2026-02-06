import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

/**
 * NoResults component - Empty state when no playlists match search/filters
 * @param {function} onClearFilters - Callback to clear all filters
 * @param {boolean} hasFilters - Whether any filters are active
 */
const NoResults = ({ onClearFilters, hasFilters }) => {
  return (
    <div className="no-results fade-in">
      <div className="no-results-icon">
        <i className="bi bi-music-note-beamed"></i>
      </div>
      <h3>No hay listas vinculadas a este filtro</h3>
      <p>
        {hasFilters
          ? 'No hay resultados para tu búsqueda o filtros.'
          : 'No hay listas disponibles en este momento.'}
      </p>
      {hasFilters && (
        <button className="btn btn-gradient-primary" onClick={onClearFilters}>
          <i className="bi bi-arrow-counterclockwise me-2"></i>
          Limpiar Filtros
        </button>
      )}
    </div>
  )
}

export default NoResults
