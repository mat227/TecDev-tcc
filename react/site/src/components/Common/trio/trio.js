import { ContainerTrio } from "./styled"
import { Link } from "react-router-dom"

export default function Trio() {
    return (

        <ContainerTrio>

            <div className="duo">
                <div className="duo-item">
                    <Link to="/genero">
                        <button pathname="/genero">
                            <img src="/assets/images/triste-feliz.svg" id="btnBusca" alt="Buscar" />
                        </button>
                        <p>Gêneros</p>
                    </Link>
                </div>
                
                <div className="duo-item">
                    <Link to="/desconto">
                        <button pathname="/desconto" style={{marginLeft: 0.5 + "em"}}>
                          <img src="/assets/images/caracoracao.svg" id="btnBusca" alt="Buscar" />
                        </button>
                        <p>Promoções</p>
                    </Link>
                </div>
            </div>
        
        </ContainerTrio>
        
    )
}

