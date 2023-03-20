import React from "react";
import {Helmet} from "react-helmet";
import Config from "../Config.json";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import Norrsken from '../images/Norrsken.mp4';
import ReCAPTCHA from "react-google-recaptcha";


const TITLE = "About | " + Config.SITE_TITLE;
const DESC = "Om Tornedalens Hantverk";
const CANONICAL = Config.SITE_DOMAIN + "/"

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            namn: '',
            adress: '',
            meddelande: '',
            isVerified: false
        };
        this.handleOnChange = this.handleOnChange.bind(this)

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        alert('Hej ' + this.state.namn +'! Tack för att du kontaktat oss:)');
        event.preventDefault();
      }

      handleOnChange(value) {
        console.log("Captcha value:", value);
        this.setState({isVerified: true})
      }

    render() {
        return(
            <main>
                <Helmet>
                    <title>{TITLE}</title>
                    <link rel="canonical" href={CANONICAL} />
                    <meta name= "description" content= {DESC} />
                    <meta name= "theme-color" content= {Config.THEME_COLOR} />
                </Helmet>
                <section className="grid-container-om">
                <article className="bild2">
                    <video width="500" controls>
                        <source src={Norrsken} type="video/mp4" />
                        Your browser does not support HTML video.
                    </video>
                </article>


                <article className="kontakt">
                <h2>Om oss</h2>
                <p>Tornedalens Hantverk startades våren 2009 och i januari 2010 öppnades vår webshop.  
                    Från 2011 har vi satsat mycket på utveckling av tennbroderier och tack vare våra duktiga 
                    medarbetare har vi absolut högsta kvalite på våra produkter. Vårt mål är att ha låga och mycket konkurrentkraftiga priser. 
                    All produktion av silver och guld produkter görs inom företaget och vi har inga dyra mellanhänder 
                    vilket betyder mycket för oss och Du som kund kan dra nytta av detta genom våra låga priser. </p>
                <h2>Kontaktuppgifter</h2>
                <p>Tornedalens Hantverk AB</p>
                <p>Örnevägen 28, Box 205</p>
                <p>980 62 Junosuando</p>

                <p> <FaPhoneAlt/>  <a href="tel:+46768471722"> 076-8471722</a></p>
                <p> <FaEnvelope/> <a href="mailto:yourstylesweden@telia.com">yourstylesweden@telia.com</a></p>
                <p> <FaFacebook/> <a href="https://www.facebook.com/Tornedalenshantverk.se/"> Besök vår facebooksida</a> </p>

                </article>

                <header className="kontakta-oss">
                    <h2>Kontakta oss:</h2>
                </header>
                </section>

                <form onSubmit={this.handleSubmit} className="contact">
                    <label>
                    Namn:
                    <input name="namn" type="text" value={this.state.namn} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                    Epostadress:
                    <input name="adress" type="text" value={this.state.adress} onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                    Meddelande:
                    <textarea name="meddelande" value={this.state.meddelande} onChange={this.handleInputChange} />
                    </label>

                    <ReCAPTCHA 
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={this.handleOnChange}/>

                    <input type="submit" value="Submit" disabled={!this.state.isVerified}/>
                </form>
                
                <article className="box2"></article>
            </main>
        )
    }
}

export default About;