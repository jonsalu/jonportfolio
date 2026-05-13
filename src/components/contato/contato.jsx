import React from "react";
import "./contato.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";





const Contato = () => {
    return(
        <div className="contato">
            <div className="contato-text">
            <h3>Contato</h3>
            
            <div className="after-contato"></div>
                
            
                <a href="www.linkedin.com/in/jonathan-salustiano-8174671a3" target="blank">Linkedin<FaLinkedin /></a>
                <a href="https://github.com/jonsalu" target="blank">GitHub<FaGithub /></a>
                <a href="mailto:jonathansalustiano@hotmail.com" target="blank"> jonathansalustiano@hotmail.com<IoMdMail /></a>
                <a href="https://wa.me/+5579999394452" target="blank"> (79) 9 9939-4452<FaWhatsapp /></a>
            
        </div>
    </div>
    )
}

export default Contato;