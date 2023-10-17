import FotoPerfil from "../../imagens/anonimo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
  faJava,
  faPython,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import styled from "styled-components";

export default function Aside() {
  return (
    <BoxAside>
      <img src={FotoPerfil} alt="foto de perfil do usuário"></img>
      <p>
        Olá a todos, nasci em uma pequena cidade, mas desde cedo demonstrei um
        espírito empreendedor, sempre em busca de soluções inovadoras. Me formei
        em uma prestigiosa universidade, destacando-se em engenharia e
        tecnologia, o que me levou a várias empresas de renome, onde encontrei
        maneiras revolucionárias de melhorar os processos existentes. Meu
        compromisso com a inovação deixará um legado duradouro para as futuras
        gerações. Juntos podemos moldar um futuro mais brilhante!
      </p>
      <BoxIcons>
        <h1>Redes sociais: </h1>
        <div>
          <a href="https://www.instagram.com">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
          <a href="https://www.twitter.com">
            <FontAwesomeIcon className="icon" icon={faXTwitter} />
          </a>
          <a href="https://www.linkedin.com">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </div>
      </BoxIcons>
      <BoxIcons>
        <h1>Habilidades: </h1>
        <div>
          <FontAwesomeIcon className="icon" icon={faJava} />
          <FontAwesomeIcon className="icon" icon={faPython} />
          <FontAwesomeIcon className="icon" icon={faNode} />
          <FontAwesomeIcon className="icon" icon={faReact} />
        </div>
      </BoxIcons>
    </BoxAside>
  );
}

const BoxAside = styled.div`
  height: 800px;
  background-color: #fff;
  max-width: 300px;
  padding: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #000;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  img {
    width: 10em;
  }
  p {
    font-size: 1em;
  }
`;

const BoxIcons = styled.div`
  h1 {
    font-size: 1.5em;
    color: #515151;
  }

  .icon {
    height: 2em;
    color: #097bf4;
    padding: 10px;

    &:hover {
      cursor: pointer;
      color: #808080;
    }
  }
`;
