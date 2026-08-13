import TarjetaCarcasa from "./TarjetaCarcasa"
import productos from "./productos"
import "./Inicio.css"

function Inicio({ agregarAlCarrito }) {
  return (
    <main id="inicio">
      <h1>Protege tu celular con tu propio estilo</h1>

      <p>
        Encuentra la carcasa ideal para proteger y personalizar tu celular.
      </p>

      <div className="productos">
        <h2>Productos destacados</h2>
        <div className="contenedor-tarjetas">
            {productos.map((producto, index) => (
           <TarjetaCarcasa
  key={index}
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