import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
    <nav className='navbar'>
    <div>
        <h1>Blog</h1>
    <Link to="/">
        <button type='button'>Home</button>
    </Link>
    <Link to="/create"> 
    <button type='button'>Create Blog</button>
    </Link>
    </div>
    </nav>
    )
}

export default NavBar;