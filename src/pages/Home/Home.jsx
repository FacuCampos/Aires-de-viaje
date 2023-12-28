import { Layout, FormHome } from "../../components";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap
import { BiMap, BiCalendar, BiUser } from 'react-icons/bi'; // Importa los iconos de Bootstrap

const Home = () => {
  return (
    <Layout>
      <div>
        <h1 className="title">Descubrí tu viaje soñado</h1>
      </div>
    <FormHome></FormHome>
      <div className="logos-home">
        <h4>Compará cientos de sitios de viajes en una sola búsqueda</h4>
      </div>
    </Layout>
  );
};

export default Home;
