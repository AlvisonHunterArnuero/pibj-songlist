import React, { useEffect, useRef } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

/**
 * SearchBar component - Debounced search input with keyboard shortcuts
 * @param {string} value - Current search query
 * @param {function} onChange - Callback when search value changes
 * @param {function} onClear - Callback when clear button clicked
 * @param {string} placeholder - Input placeholder text
 */
const SearchBar = ({
  value,
  onChange,
  onClear,
  placeholder = 'Buscar por nombre, artista o canción...',
}) => {
  const inputRef = useRef(null)

  // Keyboard shortcut: Ctrl/Cmd + K to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }

      // Esc to clear and blur
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        onClear()
        inputRef.current?.blur()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClear])

  const handleClear = () => {
    onClear()
    inputRef.current?.focus()
  }

  return (
    <div className="search-bar-container">
      <i className="bi bi-search search-icon"></i>
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Buscar alabanzas"
      />
      {value && (
        <button
          className="search-clear"
          onClick={handleClear}
          aria-label="Limpiar búsqueda"
          title="Limpiar (Esc)"
        >
          <i className="bi bi-x-circle-fill"></i>
        </button>
      )}
      <div className="search-shortcut-hint">Ctrl+K</div>
    </div>
  )
}

export default SearchBar
