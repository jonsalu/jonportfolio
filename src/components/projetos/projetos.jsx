import React from "react";
import "./projetos.css";

const projetosData = [
  {
    title: "Landing page Elddora University",
    image: "/elddora.png",
    alt: "Elddora University",
    description:
      "Uma landing page moderna para a Universidade Elddora, com foco em apresentação de cursos, responsividade e experiência de navegação fluida.",
    link: "https://www.linkedin.com/posts/jonathan-salustiano-8174671a3_html-javascript-react-activity-7310675048086867968-tW-C?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-WedMBo0w-tPe3D2B7wAlG0wZOhPQy_Gc",
  },
  {
    title: "Manipulador automático de Excel",
    image: "/fame.jfif",
    alt: "Manipulador automático de Excel",
    description:
      "Ferramenta para automatizar análise e processamento de planilhas, com interface intuitiva e lógica de fluxo de dados eficiente.",
    link: "https://www.linkedin.com/posts/jonathan-salustiano-8174671a3_devjr-programadorjunior-automaaexaeto-activity-7421659250885648384-HAQw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-WedMBo0w-tPe3D2B7wAlG0wZOhPQy_Gc",
  },
  {
    title: "Calendário de férias",
    image: "/calendario.jfif",
    alt: "Calendário de férias",
    description:
      "Um calendário prático para planejar períodos de descanso, combinar compromissos e organizar folgas com visual limpo e acessível.",
    link: "https://www.linkedin.com/posts/jonathan-salustiano-8174671a3_fullstack-react-javascript-activity-7422410299951026177-4Dwj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-WedMBo0w-tPe3D2B7wAlG0wZOhPQy_Gc",
  },
  {
    title: "Call Desk",
    image: "/calendario.jfif",
    alt: "Call Desk",
    description:
      "Sistema de atendimento para controle de tickets, com fluxo de suporte e interface organizada para melhor produtividade.",
    link: "https://www.linkedin.com/posts/jonathan-salustiano-8174671a3_reactjs-springboot-fullstack-activity-7445995295668068352-3n9X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-WedMBo0w-tPe3D2B7wAlG0wZOhPQy_Gc",
  },
];

const Projetos = () => {
  return (
    <section className="projetos">
      <div className="projetos-intro">
        <h3>Projetos em destaque</h3>
        <div className="after-projetos"></div>
        <p>
          Aqui estão alguns projetos recentes que combinam estética, usabilidade e
          execução técnica. Cada card mostra uma solução prática com atenção ao
          design e à experiência do usuário.
        </p>
      </div>

      <div className="projetos-list">
        {projetosData.map((projeto) => (
          <article className="projeto-card" key={projeto.title}>
            <div className="projeto-image">
              <img src={projeto.image} alt={projeto.alt} />
            </div>
            <div className="projeto-content">
              <h4>{projeto.title}</h4>
              <p>{projeto.description}</p>
            </div>
            <a
              className="projeto-link"
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
        