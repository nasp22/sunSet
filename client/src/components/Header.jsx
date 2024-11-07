// src/components/Header.js

import React from 'react';
import '../style/header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">SunSet</h1>
      <nav className="header-nav">
        <button className="nav-button">Hem</button>
        <button className="nav-button">Generera</button>
        <button className="nav-button">Kontakt</button>
      </nav>
    </header>
  );
}

export default Header;
