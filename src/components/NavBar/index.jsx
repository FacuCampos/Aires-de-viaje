import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, List, PeopleFill, QuestionCircleFill, CupHotFill, FileEarmarkTextFill, Globe } from "react-bootstrap-icons";
import { SearchInput } from "..";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navegador ${menuOpen ? "open" : ""}`}>
      {/* Barra nav */}
      {/* Logo */}
      <h2>Logo</h2>
      <div className="menuIcon" onClick={toggleMenu}>
        {menuOpen ? <X /> : <List />}
      </div>

      {/* Contenido */}
      <div className={`navList ${menuOpen ? "open" : ""}`}>
          <li className="navListItem">
            <SearchInput />
          </li>
          <Link className="navListItem">
            Ingresar
            <PeopleFill/>
          </Link>
          <Link>
            Blog
            <FileEarmarkTextFill/>
          </Link>
          <Link>
            Quienes somos
            <CupHotFill/>
          </Link>
          <Link>
            FAQs
            <QuestionCircleFill/>
          </Link>
          <Link>
            Idioma
            <Globe/>
          </Link>
      </div>
    </nav>
  );
};

export default NavBar;
