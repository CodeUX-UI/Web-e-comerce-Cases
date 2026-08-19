import TarjetaCarcasa from "./TarjetaCarcasa"
import productos from "./productos"
import "./Inicio.css"
import banner from "./assets/banner.jpg"

function Inicio({ agregarAlCarrito }) {
  return (
    <main id="inicio">

      <section className="banner">
        <img src={banner} alt="Banner de CaseStore" />
      </section>

      <h1>Protege tu celular con tu propio estilo</h1>

      <p>
        Encuentra la carcasa ideal para proteger y personalizar tu celular.
      </p>

      <div className="productos">
        <h2>Productos destacados</h2>

        <div className="destacados">
          {productos
            .filter(
              producto =>
                producto.nombre === "BackFast" ||
                producto.nombre === "Ultra Hidden Black" ||
                producto.nombre === "MagSafe Clear"
            )
            .map((producto) => (
              <TarjetaCarcasa
                key={producto.nombre}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            ))}
        </div>
      </div>

    </main>
  )
}

export default Inicio