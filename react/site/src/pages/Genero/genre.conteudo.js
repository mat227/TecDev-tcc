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
                  <a href="/genero/terror" class="">TERROR</a>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/deu merda(4).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="/genero/humor" class="">HUMOR</a>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/por do solprincipal(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="/genero/romance" class="">ROMANCE</a>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="assets/images/fridaprincipal(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="/genero/biografia" class="">BIOGRAFIA</a>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/outros jeitos(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <a href="/genero/poesia" class="">POESIA</a>
              </button>
            </div>
          </div>
    </div>
    <Rodape />
        </ContainerGeneroP>
        
    )
};