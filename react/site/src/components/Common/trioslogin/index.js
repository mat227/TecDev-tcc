import { ContainerTrios } from "./styled"
import { Link } from "react-router-dom"

export default function Trio() {
    return (

        <ContainerTrios>

            <div className="duo">
                <div className="duo-item">
                    <Link to="/login">
                        <button pathname="/login">
                            <img src="/assets/images/triste-feliz.svg" id="btnBusca" alt="Buscar" />
                        </button>
                        <p>Gêneros</p>
                    </Link>
                </div>
                
                <div className="duo-item">
                    <Link to="/promocaoslogin">
                        <button pathname="/promocaoslogin" style={{marginLeft: 0.5 + "em"}}>
                          <img src="/assets/images/caracoracao.svg" id="btnBusca" alt="Buscar" />
                        </button>
                        <p>Promoções</p>
                    </Link>
                </div>
            </div>
        
        </ContainerTrios>
        
    )
}

