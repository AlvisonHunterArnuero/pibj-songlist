import React from 'react'

/**
 * SkeletonCard component - Loading placeholder that mimics PlaylistWrapper
 */
const SkeletonCard = () => {
  return (
    <div className="playlist-card skeleton-card">
      <div className="container my-4">
        <div className="row align-items-top justify-content-between">
          <div className="col-12 col-md-7">
            <div className="skeleton skeleton-image"></div>
            <div
              className="skeleton skeleton-text mt-2"
              style={{ width: '60%' }}
            ></div>
            <div className="skeleton skeleton-pills mt-2"></div>
          </div>

          <div className="col-12 col-md-5">
            <div className="skeleton skeleton-card-body">
              <div className="skeleton skeleton-text mb-2"></div>
              <div
                className="skeleton skeleton-text mb-2"
                style={{ width: '80%' }}
              ></div>
              <div
                className="skeleton skeleton-text mb-2"
                style={{ width: '90%' }}
              ></div>
              <div
                className="skeleton skeleton-text mb-2"
                style={{ width: '70%' }}
              ></div>
              <div className="skeleton skeleton-buttons mt-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
