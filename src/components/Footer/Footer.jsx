import { EnvelopeFill, Facebook, Twitter, Whatsapp, X } from "react-bootstrap-icons"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className="parrafo-footer">
              <p>Contactos</p>
        <p>¿Quienes somos?</p>
        <p>Garantias y devoluciones</p>
        </div>
        <div className="containerIcon-footer">
          <p><EnvelopeFill/><span className="ms-2">Email</span></p>
          <p><Whatsapp/><span className="ms-2">Whatsapp</span></p>
          <p><Facebook/><span className="ms-2">Facebook</span></p>
          <p><Twitter/><span className="ms-2">Twitter</span></p>

        </div>
        

      


    </div>
  )
}

export default Footer