import React from "react";
import { Link } from "react-router-dom";

import '../styles/Navbar.css'

function Navbar() {
    return (
        <div className="NavBar">
            <div className="Selection">
                <Link to="/">
                <li style={{marginLeft: 10, listStyle: 'none'}}>Acceuil</li>
                </Link>
                <Link to="*">
                <li style={{marginLeft: 10, listStyle: 'none'}}>Error</li>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;