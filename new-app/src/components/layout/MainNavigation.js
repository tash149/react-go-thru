import React from 'react';
import { Link } from 'react-router-dom'; //a href would request the server and load new pg, why request when we could do this using react
import classes from './MainNavigation.module.css';
//import './MainNavigation.css'; //module.css not working

function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>My Favourites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;