import "./Footer.css"

function Footer() {
  return (
    <footer>

    <div className="footer-contenido">

        <div className="footer-seccion">
            <h3>CaseStore</h3>
            <p>Carcasas de calidad para proteger
                y personalizar tu celular.
            </p>
        </div>

        <div className="footer-seccion">
            <h3>Contacto</h3>
            <p>contacto@casestore.com</p>
            <p>+51 999 999 999</p>
        </div>

        <div className="footer-seccion">
            <h3>Redes sociales</h3>

            <p>
                <a href="#">Facebook</a>
            </p>

            <p>
                <a href="#">Instagram</a>
            </p>

            <p>
                <a href="#">TikTok</a>
            </p>
        </div>

    </div>

    <div className="footer-final">
        <p>© 2026 CaseStore. Todos los derechos reservados.</p>
    </div>

</footer>
  )
}

export default Footer