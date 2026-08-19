import "./Carrito.css"
function Carrito({ carrito, eliminarDelCarrito }) {
  return (
    <main className="carrito">
      <h1>Mi carrito</h1>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div className="productos-carrito">
          {carrito.map((producto, index) => (
            <article className="producto-carrito" key={index}>

              <img
                src={producto.imagen}
                alt={producto.nombre}
              />

              <div className="info-producto">
                <h3>{producto.nombre}</h3>
                <p>{producto.modelo}</p>
                <p>S/ {producto.precio.toFixed(2)}</p>
              </div>

              <button onClick={() => eliminarDelCarrito(index)}>
                Eliminar
              </button>

            </article>
          ))}
        </div>
      )}
    </main>
  )
}

export default Carrito