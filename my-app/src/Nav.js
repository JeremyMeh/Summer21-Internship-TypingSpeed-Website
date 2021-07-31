import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link exact to="/Solo">Solo</Link>
            <Link to="/Multiplayer">Multiplayer</Link>
            <Link to="/Profile">Profile</Link>
        </nav>
    )
}

export default Nav;