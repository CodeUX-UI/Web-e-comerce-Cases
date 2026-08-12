function TarjetaCarcasa({ producto }) {
  return (
    <article>
      <img src={producto.imagen} alt={producto.nombre} />


      <h3>{producto.nombre}</h3>
      <p>{producto.modelo}</p>
      <p>S/ {producto.precio}</p>
      <button>Agregar al carrito</button>
    </article>
  )
}

export default TarjetaCarcasa