import { useState } from "react"
import Menu from "./Menu"
import Inicio from "./Inicio"
import Carcasas from "./Carcasas"
import Nosotros from "./Nosotros"
import Carrito from "./Carrito"
import Footer from "./Footer"

function App() {

  const [pagina, setPagina] = useState("inicio")
  const [carrito, setCarrito] = useState([])
  function agregarAlCarrito(producto) {
  setCarrito([...carrito, producto])
}

function eliminarDelCarrito(index) {
  const nuevoCarrito = carrito.filter((_, i) => i !== index)
  setCarrito(nuevoCarrito)
}

  return (
    <>
  <Menu setPagina={setPagina} carrito={carrito}/>

<div className="contenido">

  {pagina === "inicio" && (
    <Inicio agregarAlCarrito={agregarAlCarrito} />
  )}

  {pagina === "carcasas" && (
    <Carcasas agregarAlCarrito={agregarAlCarrito} />
  )}

  {pagina === "nosotros" && <Nosotros />}

  {pagina === "carrito" && (
    <Carrito
      carrito={carrito}
      eliminarDelCarrito={eliminarDelCarrito}
    />
  )}

</div>

<Footer />
    </>
  )
}



export default App