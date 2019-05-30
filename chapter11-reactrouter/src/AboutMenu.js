import React from 'react';
import { NavLink } from "react-router-dom";

export const AboutMenu = () =>
    <div className="about-menu">
        <li>
            <NavLink to="/about">
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history">
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services">
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location">
                [Location]
            </NavLink>
        </li>
    </div>;
