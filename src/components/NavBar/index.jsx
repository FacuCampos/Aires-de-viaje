import React from 'react'
import './NavBar.css'
import { CartWidget } from '..'
import { AirplaneFill, BuildingsFill,BriefcaseFill ,HousesFill,CarFrontFill } from 'react-bootstrap-icons'


const NavBar = () => {
  return (
   <header>
    <h1 className='title'>Aires de Viajes</h1>
    <nav>
        <ul>
        
            <li><AirplaneFill />Avion</li>
            <li><BuildingsFill />Hospedajes </li>
            <li><HousesFill/>Alquileres</li>
            <li ><BriefcaseFill/>Paquetes</li>
            <li><CarFrontFill/>autos</li>
        </ul>
    </nav>
    <CartWidget/>
   </header>

  )
}

export default NavBar