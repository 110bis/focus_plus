import React from 'react';
import Header from '../components/Header'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

import "../styles/Error.css";

function Error() {
    return (
        <div>
        <Header/>
        <Navbar/>
            <div className='Content'>
                <h1>
                    Error 404 - Page not found
                </h1>
                <p>
                    Cette page n'existe pas
                </p>
                <p>
                <a href='/'>Revenir à la page d'acceuil</a>
                </p>
            </div>
        <Footer/>
        </div>
    );
}

export default Error;