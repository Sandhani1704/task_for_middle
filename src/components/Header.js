import React from 'react';

import './Header.css';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../assets/icons/LogoIcon';

function Header() {

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__link">
                    <LogoIcon />
                </Link>
                <nav className="header__nav">
                    <Link className="header__link" to="/">Gallery</Link>
                    <Link className="header__link" to="/favorites">Favourites</Link>
                    <Link className="header__link" to="/">Contacts</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;