import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import Config from "../Config.json";
import bild1 from '../images/bild1.jpg';

const TITLE = "Home | " + Config.SITE_TITLE;
const DESC = "Startsida på Tornedalens Hantverk";
const CANONICAL = Config.SITE_DOMAIN + "/"

class Home extends React.Component{
    render(){
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name= "description" content= {DESC} />
                    <meta name= "theme-color" content= {Config.THEME_COLOR} />
                </Helmet>

                <section class="grid-container">
                <div className="left">
                    <figure> <img src={bild1} alt="Bild på smycken" /> </figure>
                </div>

                <article className="right">
                    <h2>Tornedalens Hantverk</h2>
                    <p>Samisktinspirerade och moderna smycken i tenn och silver</p>
                    <p>De flesta av våra smycken är omsorgsfullt handgjorda</p>
                    <p>och därför kan små skillnader i form och färg förekomma,</p>
                    <p>vilket endast gör smycket ännu mer unikt. Det senaste åren har</p>
                    <p>vi satsat mycket på tennbroderier och material till tennbroderier.</p>
                    <p>Vi försöker ha ett så brett sortiment som möjligt så att du som kund</p>
                    <p>hittar allt du behöver för tillverkning av egna tennbroderier.</p>

                    <div className="button3">
                        <Link to="/Storleksguide" className="button"> Storleksguide </Link>
                    </div>

                    <div className="button4">
                        <a className="button" role="button">Skötselråd</a>
                    </div>

                </article>

                <div className="button1">
                    <Link to="/Smycken" className="button">Smycken</Link>
                </div>
                
                <div className="button2">
                    <a className="button">Hantverk</a>
                </div>
            </section>
            </main>
        )

    }
}

export default Home;