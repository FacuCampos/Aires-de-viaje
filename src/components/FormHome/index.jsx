
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import { BiMap, BiCalendar, BiUser } from 'react-icons/bi'; // Importa los iconos de Bootstrap

const FormHome = () => {
  return (
      <div className="Img-home">
        <div className="search-form">
          <div className="form-group">
            <BiMap className="iconForm"/>
            <input className='form' type="text" placeholder="Ubicación" />
          </div>
          <div className="form-group">
            <BiCalendar className="iconForm"/>
            <input className='form' type="date" placeholder="Fecha de entrada" />
          </div>
          <div className="form-group">
            <BiCalendar className="iconForm"/>
            <input className='form' type="date" placeholder="Fecha de salida" />
          </div>
          <div className="form-group">
            <BiUser className="iconForm"/>
            <input className='form' type="number" placeholder="Cantidad de personas" />
          </div>
          <button className="btnForm" type="submit">Buscar</button>
        </div>
      </div>
      
  
  );
};

export default FormHome;
