import { AirplaneFill, BriefcaseFill, BuildingsFill, CarFrontFill, HouseFill, HousesFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const LinksSection = () => {
  return (
    <div className="LinksSectionGroup">
      <Link to={'/'} className='container navLink'>
        <HouseFill className='navIcon' />
        Home
      </Link>

      <Link to={"/vuelos"} className='container navLink'>
        <AirplaneFill className='navIcon' />
        Vuelos
      </Link>

      <Link to={"/hospedajes"} className='container navLink'>
        <BuildingsFill className='navIcon' />
        Hospedajes
      </Link>

      <Link to={'/alquileres'} className='container navLink'>
        <HousesFill className='navIcon' />
        Alquileres
      </Link>

      <Link to={'/paquetes'} className='container navLink'>
        <BriefcaseFill className='navIcon' />
        Paquetes
      </Link>

      <Link to={'/autos'} className='container navLink'>
        <CarFrontFill className='navIcon' />
        Autos
      </Link>
    </div>
  );
}

export default LinksSection;
