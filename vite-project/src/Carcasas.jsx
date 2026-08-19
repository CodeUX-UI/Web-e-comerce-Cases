import TarjetaCarcasa from "./TarjetaCarcasa"
import productos from "./productos"
import "./Carcasas.css"

function Carcasas({ agregarAlCarrito }) {
  return (
    <main>
      <h1>Catálogo de carcasas</h1>

      <p>
        Encuentra la carcasa ideal para proteger y personalizar tu celular.
      </p>

      <section className="catalogo-marca">
        <h2>Samsung</h2>

        <div className="contenedor-tarjetas">
          {productos
            .filter((producto) => producto.marca === "Samsung")
            .map((producto) => (
              <TarjetaCarcasa
                key={producto.nombre}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            ))}
        </div>
      </section>

      <section className="catalogo-marca">
        <h2>Xiaomi</h2>

        <div className="contenedor-tarjetas">
          {productos
            .filter((producto) => producto.marca === "Xiaomi")
            .map((producto) => (
              <TarjetaCarcasa
                key={producto.nombre}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            ))}
        </div>
      </section>

      <section className="catalogo-marca">
        <h2>iPhone</h2>

        <div className="contenedor-tarjetas">
          {productos
            .filter((producto) => producto.marca === "iPhone")
            .map((producto) => (
              <TarjetaCarcasa
                key={producto.nombre}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            ))}
        </div>
      </section>
    </main>
  )
}

export default Carcasas