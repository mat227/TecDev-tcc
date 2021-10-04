import { ContainerTrio } from "./styled"

export default function Trio() {
    return (
        <ContainerTrio>
           <div class="trio">
            <a href="/genero">  <button><img src="/assets/images/triste-feliz.svg" id="btnBusca" alt="Buscar" /></button> </a>
             <a href="/desconto">   <button><img src="/assets/images/caracoracao.svg" id="btnBusca" alt="Buscar" /></button></a>
              <a href="/cupons">  <button><img src="/assets/images/desconto.svg" id="btnBusca" alt="Buscar" /></button></a>


            </div>
            <div class="trio2">
                <div class="titilo-trio1">GÊNEROS</div>
                <div class="titilo-trio2">PROMOÇÕES</div>
                <div class="titilo-trio3">CUPONS</div>
            </div>

        </ContainerTrio>
    )
}