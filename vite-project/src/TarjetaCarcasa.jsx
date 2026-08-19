function TarjetaCarcasa({ producto, agregarAlCarrito }) {
  return (
    <article>
      <img src={producto.imagen} alt={producto.nombre} />


      <h3>{producto.nombre}</h3>
      <p>{producto.marca}</p>
      <p>{producto.modelo}</p>
      <p>S/ {producto.precio}</p>
      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al carrito
      </button> 
    </article>
  )
}

export default TarjetaCarcasa