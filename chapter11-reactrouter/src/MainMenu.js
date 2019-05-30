import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
};

export const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/">
            [Home]
        </NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>
            [Events]
        </NavLink>
        <NavLink to="/products">
            [Products]
        </NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>
            [Contact Us]
        </NavLink>
    </nav>;
