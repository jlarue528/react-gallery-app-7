import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
            <nav className = "main-nav">
                <ul>
                    <li onClick={props.catUrl}><NavLink to="/search/cats">Cats</NavLink></li>
                    <li onClick={props.dogUrl}><NavLink to="/search/dogs">Dogs</NavLink></li>
                    <li onClick={props.computersUrl}><NavLink to="/search/computers">Computers</NavLink></li>
                </ul>
            </nav>
    )
}

export default Nav;