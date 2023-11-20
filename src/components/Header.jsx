import React from "react";
import {LOGO_URL} from "../utils/constants.js";
const Header=()=>{
    return (
        <div className="header">
            <img  className="logo" src={LOGO_URL} alt="logo" />
            <div className="nav-items"> 
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
    
}

export default Header;