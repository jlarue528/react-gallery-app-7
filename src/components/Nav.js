import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className = "main-nav">
            <ul>
                {/* <li><NavLink to={'/'}>Cats</NavLink></li>
                <li><NavLink to={props.placeHolderDog}>Dogs</NavLink></li>
                <li><NavLink to={props.placeHolderComputer}>Computers</NavLink></li> */}
            </ul>
        </nav>
    )
}

export default Nav;