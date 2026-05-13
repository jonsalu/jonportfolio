import React from "react";
import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-header">
                <h1>JS</h1>
            </div>

            <ul className="navibar-header">
                <li><a href="#">Home</a></li>
                <div className="after"></div>
                <li><a href="#">Sobre mim</a></li>
                <div className="after"></div>
                <li><a href="#">Habilidades</a></li>
                <div className="after"></div>
                <li><a href="#">Projetos</a></li>
                <div className="after"></div>
                <li><a href="#">Contato</a></li>
                <div className="after"></div>
            </ul>
        </div>
    )
}

export default Header;