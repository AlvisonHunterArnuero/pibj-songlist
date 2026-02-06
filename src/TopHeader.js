const churchLogo = new URL('./assets/logo.png', import.meta.url)

const TopHeader = () => {
  return (
    <>
      <div className="header-container fade-in">
        <div className="container mt-3">
          <div className="row justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <img
                src={churchLogo}
                alt="Primera Iglesia Bautista de Jinotepe"
                title="Primera Iglesia Bautista de Jinotepe - created by Alvison Hunter"
                aria-hidden="true"
                className="header-logo"
              />
            </div>
            <div className="col-12 col-md-6">
              <article>
                <h1 className="header-title">
                  <small className="church lead d-block mb-2">
                    Primera Iglesia Bautista de Jinotepe
                  </small>
                  <span className="gradient-text">Lista de Alabanzas</span>
                </h1>
                <p className="header-description">
                  El propósito de esta aplicación es presentar la lista oficial
                  de cantos que se utilizarán en los servicios de culto
                  evangélico de nuestra iglesia, facilitando la organización y
                  participación en cada celebración de nuestro grupo de
                  Alabanza.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="accent-line"></div>
      </div>
    </>
  )
}

export default TopHeader
