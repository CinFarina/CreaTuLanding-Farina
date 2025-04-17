import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                {}
                <img src="/logo.png" alt="Logo" />
            </div>
            {}
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/artistica">Artística</Link></li>
                <li><Link to="/category/comercial">Comercial</Link></li>
                <li><Link to="/category/escolar">Escolar</Link></li>
            </ul>
            {}
            <CartWidget />
        </nav>
    );
}

export default NavBar;