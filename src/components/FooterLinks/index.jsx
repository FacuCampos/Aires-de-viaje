import React from 'react'
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div>
      <ul className="footer-links">
          <li>
            <Link to={"/contacto"} className="footer-link">
              Contactos
            </Link>
          </li>
          <li>
            <Link to={"/nosotros"} className="footer-link">
              ¿Quiénes somos?
            </Link>
          </li>
          <li>
            <Link to={"/garantias"} className="footer-link">
              Garantías y devoluciones
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default FooterLinks