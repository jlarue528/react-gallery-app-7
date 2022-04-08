import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
            <nav className = "main-nav">
                <ul>
                    <li><NavLink to={props.catUrl}>Cats</NavLink></li>
                    <li><NavLink to={props.dogUrl}>Dogs</NavLink></li>
                    <li><NavLink to={props.computersUrl}>Computers</NavLink></li>
                </ul>
            </nav>
    )
}

export default Nav;