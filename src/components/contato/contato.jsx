import React from "react";
import "./contato.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";





const Contato = () => {
    return(
        <div className="contato" id="contato">
            <div className="contato-text">
            <h3>Contato</h3>
            
            <div className="after-contato"></div>
                
            <div className="contato-links">
                <a href="www.linkedin.com/in/jonathan-salustiano-8174671a3" target="blank"><FaLinkedin />Linkedin</a>
                <a href="https://github.com/jonsalu" target="blank"><FaGithub />GitHub</a>
                <a href="mailto:jonathansalustiano@hotmail.com" target="blank"><IoMdMail /> jonathansalustiano@hotmail.com</a>
                <a href="https://wa.me/+5579999394452" target="blank"><FaWhatsapp /> (79) 9 9939-4452  </a>
            </div>
        </div>
    </div>
    )
}

export default Contato;