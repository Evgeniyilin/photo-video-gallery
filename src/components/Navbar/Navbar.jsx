import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <p>Photo</p>
            <p>Albums</p>
        </div>
    );
};

export default Navbar;