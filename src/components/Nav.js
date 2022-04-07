import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Nav = (props) => {
    return (
        <BrowserRouter>
            <nav className = "main-nav">
                <ul>
                    <li><NavLink to="/search=cats">Cats</NavLink></li>
                    <li><NavLink to="/search=dogs">Dogs</NavLink></li>
                    <li><NavLink to="/search=computers">Computers</NavLink></li>
                </ul>
        </nav>

            <Route path="/search=cats" render={() => props.navSearch("cats")}/>
            <Route path="/search=dogs" render={() => props.navSearch("dogs")}/>
            <Route path="/search=computers" render={() => props.navSearch("computers")}/>
        </BrowserRouter>
    )
}

export default Nav;