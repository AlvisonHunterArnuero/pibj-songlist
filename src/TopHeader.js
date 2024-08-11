const churchLogo = new URL('./assets/logo.png', import.meta.url)

const TopHeader = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-between align-items-center">
          <div className="col-12 col-md-6">
            <img
              src={churchLogo}
              alt="Primera Iglesia Bautista de Jinotepe"
              title="Primera Iglesia Bautista de Jinotepe - created by Alvison Hunter"
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
                El propósito de esta aplicación es presentar la lista oficial de
                cantos que se utilizarán en los servicios de culto evangélico de
                nuestra iglesia, facilitando la organización y participación en
                cada celebración de nuestro grupo de Alabanza.
              </p>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
