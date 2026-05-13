import React from "react";
import "./habilidades.css";

const Habilidades = () => {
    return(
        <div className="habilidades">
            <div className="titulo-habilidades">
                <h1>Habilidades e ferramentas</h1>
                <div className="skillsafter"></div>
            </div>
            <div className="habilidades-cards">
                <div className="card-habilidade">
                    <h3>Python</h3>
                    <p>Desenvolvo soluções eficientes utilizando Python para otimizar fluxos de trabalho manuais. Tenho experiência sólida na manipulação de grandes volumes de dados e documentos com Pandas e Openpyxl, além de construir APIs robustas e performáticas utilizando FastAPI para integrar sistemas e automatizar tarefas complexas.</p>
                </div>
                <div className="card-habilidade">
                    <h3>Java</h3>
                    <p>Desenvolvo soluções eficientes utilizando Java para criar aplicações escaláveis e robustas. Tenho experiência sólida em desenvolvimento de sistemas empresariais, utilizando frameworks como Spring Boot para construir APIs RESTful e microserviços.</p>
                </div>
                <div className="card-habilidade">
                    <h3>Javascript</h3>
                    <p>Desenvolvo Single Page Applications (SPAs) focadas em interatividade. Tenho domínio em manipulação de estado e hooks, garantindo que a interface reaja de forma fluida. Utilizo React Icons para garantir um design limpo e ícones consistentes que melhoram a usabilidade do produto final.</p>
                </div>
            </div>
        </div>
    )
}

export default Habilidades;

