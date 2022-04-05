import React from 'react';

const Nav = (props) => {
    return (
        <nav className = "main-nav">
            <ul>
                <li><a href={props.placeHolderCat}>Cats</a></li>
                <li><a href={props.placeHolderDog}>Dogs</a></li>
                <li><a href={props.placeHolderComputer}>Computers</a></li>
            </ul>
        </nav>
    )
}

export default Nav;