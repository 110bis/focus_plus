//////////////////
/* Dependencies */
//////////////////

import React from "react";

////////////
/* STYLES */
////////////

import "../styles/Header.css";

//////////
/* INIT */
//////////

import LogoMinistère from "../image/logo_ministère.png"
//import LogoFocus from "../image/logo_focus+.png"

/////////
/* APP */
/////////

function Header() {
    return (
        <header>
            <div className="logo-ministère">
                <img src={LogoMinistère} alt="logo du ministère de l'Education Nationale" title="logo du ministère de l'Education Nationale"></img>
            </div>
        </header>
    );
}

export default Header