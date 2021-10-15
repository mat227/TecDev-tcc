import { Link } from "react-router-dom"
import { ContainerPartecimaLogado } from "./styled"


export default function ParteCimaLogado() {
    return (
            <ContainerPartecimaLogado>
            <div class="hp1-buscap">
           <Link to="/"> <div class="hp1-logo">
                <img src="/assets/images/nice library png 1.svg" alt=""/>
                <img class="hp1-nome" src="/assets/images/Bookly.svg" alt=""/>

            </div></Link>

            <div class="hp1-busca">
                <div class="divBusca">
                    <input type="text" id="txtBusca" placeholder="Buscar..." />
                    <button><img src="/assets/images/lupa.svg" id="btnBusca" alt="Buscar" /></button>
                </div>
            </div>

            <div class="hp1-seus">
            <Link to="/suasacola"><div class="hp1-bolsa"><img src="/assets/images/sua bolsa.svg" alt=""/></div> </Link> 
             <Link to="/favoritos">   <div class="hp1-favorito"><img src="/assets/images/seus favoritos.svg" alt=""/></div></Link>
            <Link to="/perfil"><div class="hp1-entre-cadastre"><img src="/assets/images/seu perfilminhaConta.svg" alt=""/></div></Link>    

            </div>
            </div>
            </ContainerPartecimaLogado>
    )
}