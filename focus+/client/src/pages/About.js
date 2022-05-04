import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Proto from  '../components/ProtoWarn';

function About() {
    return (
        <div>
        <Header />
        <Navbar />
        <Proto />
            <div>
                <h1>
                    Le Projet
                </h1>
                <p>Sur la base des besoins identifiés, en particulier lors de hackatons, le projet Focus+ prend la forme d’<strong>un portail de services et d’accompagnement ainsi que d’extensions intégrées aux outils de production de document.</strong></p>
                <p>En fonction du format, les services offerts sur le portail Focus+ peuvent générer une version alternative du document déposé, afin d’illustrer les difficultés rencontrées par certains publics (par exemple pour une infographie, les versions altérées correspondant aux différents types de « daltonismes »), permettant ainsi à l’agent public un autodiagnostic et une meilleure compréhension de l’impact de ses décisions sur ses destinataires.</p>
                <p>Le portail propose aussi de l’accompagnement, notamment sous forme de pas-à-pas, de tutoriels et de modules d’autoformation. P. ex. un guide pour la production d’une vidéo accessible, avec les points d’attention.</p>
                <p>Enfin le projet intègre des assistances intégrées aux outils de production, au plus près de cette dernière. P. ex. une extension (pour un « mini-Word » dans un CMS ou un logiciel bureautique tel que LibreOffice ou Word) signale entre autres les choix de couleurs de texte et de fond incompatibles avec un niveau de contraste suffisant au sens du RGAA (référentiel général d’amélioration de l’accessibilité).</p>
                <br/>
                <p>Ppur accéder au code du projet <a href="https://github.com/110bis/focus_plus">cliquez-ici</a></p>
            </div>
        <Footer/>
        </div>
    );
}

export default About;