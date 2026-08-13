import TarjetaCarcasa from "./TarjetaCarcasa"
import productos from "./productos"


function Carcasas({ agregarAlCarrito })  {
  return (
    <main>
      <h1>Nuestras carcasas</h1>

      <p>
        Encuentra la carcasa ideal para proteger y personalizar tu celular.
      </p>

      <h2>Catálogo de carcasas</h2>

      <div className="contenedor-tarjetas">
        {productos.map((producto, index) => (
          <TarjetaCarcasa
            key={index}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>
    </main>
  )
}

export default Carcasas