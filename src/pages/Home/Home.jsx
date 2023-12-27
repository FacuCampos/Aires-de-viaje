import { Layout } from "../../components";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import { BiMap, BiCalendar, BiUser } from 'react-icons/bi'; // Importa los iconos de Bootstrap

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className="title">Descubrí tu viaje soñado</h1>
      </div>
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
      <div className="logos-home">
        <h4>Compará cientos de sitios de viajes en una sola búsqueda</h4>
      </div>
    </Layout>
  );
};

export default Home;
