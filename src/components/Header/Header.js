import React from 'react';
import logo from '../../images/Logo/tfd-logo-1.png';
import Navigation from '../Navigation/Navigation';
import './Header.css'
const Header = () => {
    return (
        <header className='header'>
            <img  src={logo} alt='logo'/>
            <Navigation></Navigation>
        </header>
    );
};

export default Header;