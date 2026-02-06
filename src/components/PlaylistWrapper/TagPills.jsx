import React from 'react'

/**
 * TagPills component - Displays visual tag indicators
 * @param {Array} tags - Array of tag names to display
 * @param {number} maxDisplay - Maximum number of tags to show (default: 3)
 */
const TagPills = ({ tags = [], maxDisplay = 3 }) => {
  if (!tags || tags.length === 0) return null

  const visibleTags = tags.slice(0, maxDisplay)
  const remainingCount = tags.length - maxDisplay

  return (
    <div className="tag-pills-container">
      {visibleTags.map((tag, index) => (
        <span key={`${tag}-${index}`} className="tag-pill">
          {tag}
        </span>
      ))}
      {remainingCount > 0 && (
        <span className="tag-pill" title={tags.slice(maxDisplay).join(', ')}>
          +{remainingCount} more
        </span>
      )}
    </div>
  )
}

export default TagPills
