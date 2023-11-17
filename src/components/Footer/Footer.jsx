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
          <i class="bi bi-envelope-arrow-down-fill">--email</i>
          <i class="bi bi-whatsapp">-- Whatsapp</i>
          <i class="bi bi-facebook">-- Facebook</i>
          <i class="bi bi-twitter-x">--Twitter</i>

        </div>
        

      


    </div>
  )
}

export default Footer