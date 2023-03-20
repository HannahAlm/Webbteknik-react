import React from "react";
import {NavLink} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

class Navbar extends React.Component {
    render() {
        return(
            <section>
            <ul className="navbar">
                <li className="subject"> <NavLink to="/" exact activeClassName="active">  Startsida </NavLink></li>
                <li className="subject"> <NavLink to="/Smycken" activeClassName="active">  Smycken</NavLink></li>
                <li className="subject"> <a>Hantverk</a></li>
                <li className="subject" id="right"> <a> <FaShoppingCart/> </a> </li>   
                <li className="subject" id="right"> <NavLink to="/About" activeClassName="active" >Om oss</NavLink> </li>
            </ul>
            </section>
        )
    }
    
}

export default Navbar