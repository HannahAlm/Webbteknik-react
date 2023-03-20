import React from "react"
import {Helmet} from "react-helmet";
import Config from "../Config.json";

const TITLE = "Storleksguide | " + Config.SITE_TITLE;
const DESC = "Storleksguide på Tornedalens Hantverk";
const CANONICAL = Config.SITE_DOMAIN + "/"

class Storleksguide extends React.Component{
    render(){
        return( <main>
                    <Helmet>
                        <title>{TITLE}</title>
                        <link rel="canonical" href={CANONICAL} />
                        <meta name= "description" content= {DESC} />
                        <meta name= "theme-color" content= {Config.THEME_COLOR} />
                    </Helmet>
                    <section className="grid-container-storleksguide">
                    <article className="rubrik">
                        <h1>Storleksguide</h1>
                    </article>

                    <article className="guide">
                        <p>Vi anger våra ringars storlekar i millimeter genom att mäta omkretsen.<br />
                        Man kan även få fram ringstorleken genom att mäta diametern.<br />
                        Hur man omvandlar mellan omkrets och diameter kan du se i tabellen.</p>
                        <p>Om du inte vet vad du har för ringstorlek kan du göra på följande sätt:</p>
                        <p>1. Ta en bit snöre och linda ett varv runt ditt finger.</p>
                        <p>2. Mät upp snöret där det går ihop. Det måttet du får fram i millimeter är den storlek du ska välja.</p>
                    </article>


                    <table className="tabell">
                        <tr>
                        <th className="th">Omkrets</th>
                        <th className="th">Diameter</th>

                        </tr>
                        <tr>
                        <td className="td">48</td>
                        <td className="td">15,5</td>

                        </tr>
                        <tr>
                        <td className="td">51</td>
                        <td className="td">16,1</td>

                        </tr>
                        <tr>
                        <td className="td">53</td>
                        <td className="td">16,9</td>
                        </tr>
                        <tr>
                            <td className="td">56</td>
                            <td className="td">17,8</td>
                        </tr>
                        <tr>
                            <td className="td">58</td>
                            <td className="td">18,5</td>
                        </tr>
                        <tr>
                            <td className="td">59</td>
                            <td className="td">18,9</td>
                        </tr>
                        <tr>
                            <td className="td">61</td>
                            <td className="td">19,4</td>
                        </tr>
                        <tr>
                            <td className="td">62</td>
                            <td className="td">19,8</td>
                        </tr>
                        <tr>
                            <td className="td">63</td>
                            <td className="td">20,2</td>
                        </tr>
                        <tr>
                            <td className="td">65</td>
                            <td className="td">20,7</td>
                        </tr>

                    </table>

                    <article className="box"
                    ></article>
                    <article className="box2"
                    ></article>
                    </section>
        </main>

            )

        }
    }
    
    export default Storleksguide;