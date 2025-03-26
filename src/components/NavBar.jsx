import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Librería Scorpio</div>
            <ul className="nav-links">
                <li><a href="#pinturas">Artística</a></li>
                <li><a href="#productos">Comercial</a></li>
                <li><a href="#escuela">Escolar</a></li>
                <li><a href="#regalos">Regalería</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;