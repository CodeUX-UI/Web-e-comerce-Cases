function Menu({ setPagina, carrito }) {
  return (
    <nav>
      <h2>CaseStore</h2>

      <button onClick={() => setPagina("inicio")}>
        Inicio
      </button>

      <button onClick={() => setPagina("carcasas")}>
        Carcasas
      </button>

      <button onClick={() => setPagina("nosotros")}>
        Nosotros
      </button>

      <button onClick={() => setPagina("carrito")}>
        🛒 {carrito.length > 0 && carrito.length}
      </button>
    </nav>
  )
}

export default Menu