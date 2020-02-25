import React from 'react';

import './Navbar.scss';
import { Link } from 'react-router-dom';

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Livraria Digital</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/" className="nav-link" href="#">Home<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/criacao" className="nav-link">Adição</Link>
                </li>
            </ul>
            <span className="navbar-text">
                Procure seus livros ou cadastre novos livros no nosso banco.
            </span>
        </div>
    </nav>
)

export default navbar;