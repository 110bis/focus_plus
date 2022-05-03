// Footer of the web page. Displays the creators of the app.

import React from "react";
import labbis from "../image/lab110bis.png"
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="Footer">
            <div className="logo-labbis">
                <img src={labbis} alt="logo du lab 110bis" title="logo du lab 110bis"/>
            </div>
        </footer>
    );
}

export default Footer;