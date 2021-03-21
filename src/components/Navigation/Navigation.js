import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='navLink'>
            <Link to='/home'>Home</Link>
            <Link to='/destination'>Destination</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login3'><Button variant='warning'> LogIn</Button></Link>
        </div>
    );
};

export default Navigation;