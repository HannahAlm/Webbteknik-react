import React from "react"
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import Config from "../Config.json";
import Renhorn from '../images/ring-renhorn.jpeg';

const TITLE = "Produkt | " + Config.SITE_TITLE;
const DESC = "Produktsida på Tornedalens Hantverk";
const CANONICAL = Config.SITE_DOMAIN + "/"

class Produkt extends React.Component{
    render(){
        return( <main>
                    <Helmet>
                        <title>{TITLE}</title>
                        <link rel="canonical" href={CANONICAL} />
                        <meta name= "description" content= {DESC} />
                        <meta name= "theme-color" content= {Config.THEME_COLOR} />
                        </Helmet>
                    <section class="grid-container-produkt">
                    <article className="produktbild">
                        <figure>
                            <img src={Renhorn} alt="Ring renhorn guld" />
                        </figure>
                    </article>

                    <article className="name">
                    <h1>Ring Renhorn guld</h1>
                    <p>6 600kr</p>
                    </article>

                    <div  className="button5">
                        <a className="button" style={{textDecoration: 'none'}}>Köp </a>
                    </div >

                    <div  className="button6" >
                        <Link to="/Storleksguide" className="button" style={{textDecoration: 'none'}}> Storleksguide </Link>
                    </div >

                    <article className="beskrivning">
                    <p> Renhornsring i 18k guld. Ringen väger ca 9 gram. </p>
                    </article>
                    </section>
                </main>
        )

    }
}

export default Produkt;