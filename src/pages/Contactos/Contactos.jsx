//import { Layout} from "../../components";
import "./Contactos.css";

const Contactos = () => {
  return (
   
 <div className="container-contactos">
      <h1>Servicios de contactos</h1>
      <h4>Jefe de servicios : Gaston Carvallo </h4>
      <h4>Coordinador y asesor de viajes : Facundo campos </h4>
      <div>
        <div>
          <h3>Emails de contacto:</h3>
          <a
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=facucampos99@gmail.com"
            target="_blank"
          >
            <img src="./Image/icons8-gmail-48.png" alt="email" />
            Email
          </a>
          <p>info@Airesdeviajes.com.ar</p>
          <h3>consultas y reservas </h3>
          <img
            src="./Image/icons8-llamada-entrante-50.png"
            alt="telefono de linea"
          />{" "}
          <p>Operaciones: 4802-0123</p>
          <a href="https://api.whatsapp.com/send?phone=541161671608">
            <img src="./Image/icons8-whatsapp-48.png" alt="whatsapp" />
            <p>Ventas:: 11-61671608</p>
          </a>
        </div>
        <div>
          <h3>Redes sociales:</h3>
          <div>
            <a href="http://facebook.com" target="_blank">
              <img src="./Image/icons8-facebook-48.png" alt="logo facebook" />
              <p>facebook</p>
            </a>
            <a href="http://instagram.com" target="_blank">
              <img src="./Image/icons8-instagram-48.png" alt="" />
              <p>Instagram</p>
            </a>
            <a href="http://twitter.com" target="_blank">
              <img src="./Image/icons8-twitter-64.png" alt="" />
              <p>Twitter</p>
            </a>
          </div>
        </div>
        <div>
          <h3>Dirección</h3>
          <p>Av. Libertador 1080, piso 1- CABA</p>
        </div>
      </div>
    </div>
  
  );
};

export default Contactos;
