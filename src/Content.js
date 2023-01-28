const laptop = new URL('./assets/logo.png', import.meta.url)

const Content = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6">
            <img
              src={laptop}
              alt="Laptop with a play button"
              aria-hidden="true"
            />
          </div>
          <div className="col-12 col-md-6">
            <article>
              <h1>
                <small className="church lead">
                  Primera Iglesia Bautista de Jinotepe
                </small>
                Lista de Alabanzas
              </h1>
              <p>
                El proposito de esta app es presentar la lista establecida de
                cantos que se usaran en los servicios de culto evangelico de
                nuestra iglesia.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
