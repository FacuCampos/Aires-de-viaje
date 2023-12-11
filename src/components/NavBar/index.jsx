import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AirplaneFill, BuildingsFill, BriefcaseFill, HousesFill, CarFrontFill, HouseFill } from 'react-bootstrap-icons';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navegador ${menuOpen ? 'open' : ''}`}>
      {/* Icono del menú */}
      <div className='menuIcon' onClick={toggleMenu}>
        ☰
      </div>

      {/* Lista de enlaces */}
      <div className={`navList ${menuOpen ? 'open' : ''}`}>
        <Link to={'/'} className='navLink'>
          <HouseFill className='navIcon' />
          Home
        </Link>
        <Link to={"/vuelos"} className='navLink'>
          <AirplaneFill className='navIcon' />
          Vuelos
        </Link>
        <Link to={"/hospedajes"} className='navLink'>
          <BuildingsFill className='navIcon' />
          Hospedajes
        </Link>
        <Link to={'/alquileres'} className='navLink'>
          <HousesFill className='navIcon' />
          Alquileres
        </Link>
        <Link to={'/paquetes'} className='navLink'>
          <BriefcaseFill className='navIcon' />
          Paquetes
        </Link>
        <Link to={'/autos'} className='navLink'>
          <CarFrontFill className='navIcon' />
          Autos
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
