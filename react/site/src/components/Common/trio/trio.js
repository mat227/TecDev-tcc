import { ContainerTrio } from "./styled"
import { Link } from "react-router-dom"

export default function Trio() {
    return (
        <ContainerTrio>
           <div class="trio">
            <Link to="/genero">  <button><img src="/assets/images/triste-feliz.svg" id="btnBusca" alt="Buscar" /></button> </Link>
             <Link to="/desconto">   <button><img src="/assets/images/caracoracao.svg" id="btnBusca" alt="Buscar" /></button></Link>
              <Link to="/cupons">  <button><img src="/assets/images/desconto.svg" id="btnBusca" alt="Buscar" /></button></Link>


            </div>
            <div class="trio2">
                <div class="titilo-trio1">GÊNEROS</div>
                <div class="titilo-trio2">PROMOÇÕES</div>
                <div class="titilo-trio3">CUPONS</div>
            </div>

        </ContainerTrio>
    )
}