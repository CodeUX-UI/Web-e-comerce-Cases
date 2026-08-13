function Carrito({ carrito, eliminarDelCarrito }) {
  return (
    <main>
      <h1>Mi carrito</h1>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {carrito.map((producto, index) => (
            <article key={index}>
              <h3>{producto.nombre}</h3>
              <p>{producto.modelo}</p>
              <p>S/ {producto.precio}</p>
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