//////////////////
/* Dependencies */
//////////////////

import React from "react";

// import components
import Header from '../components/Header';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

import "../styles/Pages.css";

function Home() {
    
    return (
        <div className="pages">
            <div className="Home">
                <Header />
                <Navbar />
                <div className="Home-container">
                    <h1> FOCUS + </h1>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;