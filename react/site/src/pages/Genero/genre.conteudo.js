import { ContainerGeneroP } from "./genre.styled";
import ParteCima from "../../components/parteCima/componente";
import Rodape from "../../components/rodape/redape";

export default function GeneroPrincipal() { 
    return (        
        
        <ContainerGeneroP>
            <ParteCima />
                        <div className="titulo">
        <div className="quadrado" style={{marginRight: 0.5 + "em"}}></div>
            <p>GÊNEROS</p>
        <div className="quadrado" style={{marginLeft: 0.5 + "em"}}></div>
    </div>

    <div className="generos">


        <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/as 1nico.svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="terror.html" class="">TERROR</a>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/deu merda(4).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="humor.html" class="">HUMOR</a>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/por do solprincipal(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="romance.html" class="">ROMANCE</a>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="assets/images/fridaprincipal(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="biografia.html" class="">BIOGRAFIA</a>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/outros jeitos(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="poesia.html" class="">POESIA</a>
              </button>
            </div>
          </div>
    </div>
    <Rodape />
        </ContainerGeneroP>
        
    )
};