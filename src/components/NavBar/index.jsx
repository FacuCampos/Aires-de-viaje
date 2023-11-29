import React from 'react'
import { Link } from 'react-router-dom'
import { AirplaneFill, BuildingsFill,BriefcaseFill , HousesFill, CarFrontFill, HouseFill } from 'react-bootstrap-icons'
import './NavBar.css'


const NavBar = () => {
  return (
   
      <nav className='navegador'>
        <div className='navList'>
        <Link to={'/'}className='navLink' >
           <HouseFill/>
           <p>Home</p>
        </Link>
        <Link to={"/vuelos"}className='navLink' >
          <AirplaneFill />
          <p>Vuelos</p>
        </Link>
        <Link to={"/hospedajes"} className='navLink'>
          <BuildingsFill />
          <p>Hospedajes</p>
        </Link>
        <Link to={'/alquileres'} className='navLink'> 
         <HousesFill />
         <p>Alquileres</p>
        </Link>
        <Link to={'/paquetes'} className='navLink'>
        <BriefcaseFill />
        <p>Paquetes</p>
        </Link >
        <Link to={'/autos'} className='navLink'>
          <CarFrontFill />
          <p>autos</p>
        </Link>
        </div>
      </nav>
  );
}

export default NavBar