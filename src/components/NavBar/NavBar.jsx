import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { AirplaneFill, BuildingsFill } from 'react-bootstrap-icons'


const NavBar = () => {
  return (
   <header>
    <h1 className='title'>Aires de Viajes</h1>
    <nav>
        <ul>
        
            <li><AirplaneFill />Avion</li>
            <li><BuildingsFill />Hola x 2</li>
            <li>Hola x 3</li>
        </ul>
    </nav>
    <CartWidget/>
   </header>

  )
}

export default NavBar