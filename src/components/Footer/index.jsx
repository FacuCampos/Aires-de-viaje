import { EnvelopeFill, Facebook, Twitter, Whatsapp } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-parrafo">
        <p>Contactos</p>
        <p>¿Quienes somos?</p>
        <p>Garantias y devoluciones</p>
      </div>
      <div className="footer-containerIcon">
        <p><EnvelopeFill /><span className="ms-2">Email</span></p>
        <p><Whatsapp /><span className="ms-2">Whatsapp</span></p>
        <p><Facebook /><span className="ms-2">Facebook</span></p>
        <p><Twitter /><span className="ms-2">Twitter</span></p>

      </div>
    </div>
  )
}

export default Footer