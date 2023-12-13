import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { X, List, PeopleFill, QuestionCircleFill, CupHotFill, FileEarmarkTextFill, Globe } from "react-bootstrap-icons";
import { SearchInput } from "..";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Barra superior */}
      <div className="navbarTopContenedor">
        <h2 className="m-0 logo">Logo</h2>
        <X className={`navIcon ${menuOpen && "mostrar"}`} onClick={toggleMenu}/>
        <List className={`navIcon ${!menuOpen && "mostrar"}`} onClick={toggleMenu}/>
      </div>

      {/* Desplegable */}
      <div className={`navbarList ${menuOpen && "open"}`}>
        <NavLink className="logoDesktop d-none d-lg-flex">Logo</NavLink>
        <SearchInput />
        <hr className="m-0"/>
        <NavLink className="navbarItem">
          <PeopleFill/>
          <p>Ingresar</p>
        </NavLink>
        <hr className="m-0"/>
        <NavLink className="navbarItem">
          <FileEarmarkTextFill/>
          <p>Blog</p>
        </NavLink>
        <hr className="m-0"/>
        <NavLink className="navbarItem">
          <CupHotFill/>
          <p>Quienes somos</p>
        </NavLink>
        <hr className="m-0"/>
        <NavLink className="navbarItem">
          <QuestionCircleFill/>
          <p>FAQs</p>
        </NavLink>
        <hr className="m-0"/>
        <NavLink className="navbarItem">
          <Globe/>
          <p>Idioma</p>
        </NavLink>
      </div>
    </nav>
    );
  };

export default NavBar;
