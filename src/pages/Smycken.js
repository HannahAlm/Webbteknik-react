import React from "react"
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import Config from "../Config.json";
import Renhorn from '../images/ring-renhorn.jpeg';
import Smal from '../images/ring-hamrad-smal.jpeg'
import Bred from '../images/ring-hamrad-bred.jpeg'
import CarpeDiem from '../images/ring-carpe-diem.jpeg'

const TITLE = "Smycken | " + Config.SITE_TITLE;
const DESC = "Smycken på Tornedalens Hantverk";
const CANONICAL = Config.SITE_DOMAIN + "/"

class Smycken extends React.Component{
    render(){
        return( <main>
                    <Helmet>
                        <title>{TITLE}</title>
                        <link rel="canonical" href={CANONICAL} />
                        <meta name= "description" content= {DESC} />
                        <meta name= "theme-color" content= {Config.THEME_COLOR} />
                    </Helmet>
                    <section className="grid-container-smycken">
                        <article className="rubrik">
                            <h1>Smycken</h1>
                        </article>

                        <article className="item1">
                            <figure className="bild">
                                <Link to="/Produkt"><img src={Renhorn} alt="Ring med renhorn" /></Link>
                            </figure>
                            <p>Ring renhorn guld</p>
                        </article>
                        <article className="item2">
                            <figure className="bild">
                                <Link to="/Produkt"><img src={CarpeDiem} alt="Ring carpe diem" /></Link>
                            </figure>
                            <p>Ring carpe diem</p>
                        </article>
                        <article className="item3">
                            <figure className="bild">
                                <Link to="/Produkt"><img src={Bred} alt="Bred hamrad ring" /></Link>
                            </figure>
                            <p>Ring bred hamrad</p>
                        </article>
                        <article className="item4">
                            <figure className="bild">
                                <Link to="/Produkt"><img src={Smal} alt="Smal hamrad ring" /></Link>
                            </figure>
                            <p>Ring smal hamrad</p>
                        </article>
                        <article className="item5">
                            <figure className="bild">
                                <Link to="/Produkt"></Link><img src={CarpeDiem} alt="Ring carpe diem" />
                            </figure>
                            <p>Ring carpe diem</p>
                        </article>
                        <article className="item6">
                            <figure className="bild">
                                <Link to="/Produkt"></Link><img src={Renhorn} alt="Ring med renhorn"/>
                            </figure>
                            <p>Ring renhorn guld</p>
                        </article>
                        <article className="item7">
                            <figure className="bild">
                                <Link to="/Produkt"></Link><img src={Smal} alt="Smal hamrad ring" />
                            </figure>
                            <p>Ring smal hamrad</p>
                        </article>
                        <article className="item8">
                            <figure className="bild">
                                <Link to="/Produkt"></Link><img src={Bred} alt="Bred hamrad ring" />
                            </figure>
                            <p>Ring bred hamrad</p>
                        </article>
                        <article className="item9">
                            <figure className="bild">
                                <Link to="/Produkt"></Link><img src={Smal} alt="Smal hamrad ring" />
                            </figure>
                            <p> Ring smal hamrad</p>
                        </article>
                    </section>
        </main>

        )

    }
}

export default Smycken;