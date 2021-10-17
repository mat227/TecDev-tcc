import { ContainerGeneroP } from "./genre.styled";
import ParteCima from "../../components/Common/parteCima/componente";
import Rodape from "../../components/Common/rodape/redape";
import { Link } from "react-router-dom";
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
                  <Link to="/genero/terror" class="">TERROR                        </Link>
              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/deu merda(4).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <Link to="/genero/humor" class="">HUMOR                        </Link>

              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/por do solprincipal(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <Link to="/genero/romance" class="">ROMANCE                        </Link>

              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="assets/images/fridaprincipal(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <Link to="/genero/biografia" class="">BIOGRAFIA                        </Link>

              </button>
            </div>
          </div>

          <div className="box-genero">
            <div className="imagem">
              <img src="/assets/images/outros jeitos(1).svg" alt="" />
            </div>
            <div className="botao">
              <button>
                  <Link to="/genero/poesia" class="">POESIA                        </Link>

              </button>
            </div>
          </div>
    </div>
    <Rodape />
        </ContainerGeneroP>
        
    )
};