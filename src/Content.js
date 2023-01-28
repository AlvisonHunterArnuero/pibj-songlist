const laptop = new URL('./assets/logo.png', import.meta.url)

const Content = () => {
  return (
    <>
      <section className="river">
        <img src={laptop} alt="Laptop with a play button" aria-hidden="true" />
        <article>
          <h1>
            <small className="church">Primera Iglesia Bautista de Jinotepe</small>
            Lista de Alabanzas
          </h1>
          <p>
            El proposito de esta app es presentar la lista establecida de cantos que se
            usaran en los servicios de culto evangelico de nuestra iglesia.
          </p>

        </article>
      </section>
    </>
  )
}

export default Content
