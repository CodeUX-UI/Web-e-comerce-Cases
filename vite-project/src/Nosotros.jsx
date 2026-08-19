import "./Nosotros.css"
import nosotrosImagen from "./assets/nosotrosimagen.jpg";

function Nosotros() {
  return (
    <main className="nosotros">

      {/* Presentación */}
      <section className="presentacion">
        <div className="presentacion-texto">
          <h1>NOSOTROS</h1>

          <h2>
            En CaseStore nos apasiona proteger tu mundo.
          </h2>

          <p>
            Somos una tienda especializada en carcasas para teléfonos
            celulares. Nuestro objetivo es ofrecer productos de calidad,
            diseños únicos y la mejor experiencia de compra.
          </p>
        </div>

        <div className="presentacion-imagen">
          <img src={nosotrosImagen} alt="Carcasas para celulares" />
        </div>
      </section>


      {/* ¿Por qué elegirnos? */}
      <section className="porque-elegirnos">
        <h2>¿POR QUÉ ELEGIRNOS?</h2>

        <div className="beneficios">

          <article>
            <h3>CALIDAD</h3>
            <p>
              Ofrecemos carcasas resistentes y duraderas para proteger
              tu celular.
            </p>
          </article>

          <article>
            <h3>DISEÑOS ÚNICOS</h3>
            <p>
              Variedad de estilos para que personalices tu celular
              a tu manera.
            </p>
          </article>

          <article>
            <h3>MEJOR EXPERIENCIA</h3>
            <p>
              Nos enfocamos en brindarte una compra fácil, rápida
              y segura.
            </p>
          </article>

          <article>
            <h3>ATENCIÓN</h3>
            <p>
              Estamos para ayudarte antes, durante y después de tu compra.
            </p>
          </article>

        </div>
      </section>


      {/* Misión y visión */}
      <section className="mision-vision">

        <article>
          <h2>NUESTRA MISIÓN</h2>
          <p>
            Brindar carcasas de alta calidad que combinen protección,
            estilo y funcionalidad, superando las expectativas de
            nuestros clientes.
          </p>
        </article>

        <article>
          <h2>NUESTRA VISIÓN</h2>
          <p>
            Ser la tienda online líder en carcasas para celulares en Perú,
            reconocida por nuestra calidad y servicio al cliente.
          </p>
        </article>

      </section>

    </main>
  )
}

export default Nosotros