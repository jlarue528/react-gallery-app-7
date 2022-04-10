import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
            <nav className = "main-nav">
                <ul>
                    <li onClick={props.catSearch}><NavLink to="/cats">Cats</NavLink></li>
                    <li onClick={props.dogSearch}><NavLink to="/dogs">Dogs</NavLink></li>
                    <li onClick={props.computerSearch}><NavLink to="/computers">Computers</NavLink></li>
                </ul>
            </nav>
    )
}

export default Nav