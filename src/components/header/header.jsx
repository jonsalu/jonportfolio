import React from "react";
import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-header">
                <h1>JS</h1>
            </div>

            <ul className="navibar-header">
                <li><a href="#home">Home</a></li>
                <div className="after"></div>
                <li><a href="#sobre">Sobre mim</a></li>
                <div className="after"></div>
                <li><a href="#habilidades">Habilidades</a></li>
                <div className="after"></div>
                <li><a href="#projetos">Projetos</a></li>
                <div className="after"></div>
                <li><a href="#contato">Contato</a></li>
                <div className="after"></div>
            </ul>
        </div>
    )
}

export default Header;