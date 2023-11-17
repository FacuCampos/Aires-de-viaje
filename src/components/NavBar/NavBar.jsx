import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
   <header>
    <h1 className='title'>Aires de Viajes</h1>
    <nav>
        <ul>
        
            <li><i class="bi bi-airplane-engines-fill"></i>Avion</li>
            <li>Hola x 2</li>
            <li>Hola x 3</li>
        </ul>
    </nav>
    <CartWidget/>
   </header>

  )
}

export default NavBar