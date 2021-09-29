import { ContainerPartecima } from "./styled"


export default function Conteudo() {
    return (
<ContainerPartecima>
<div class="hp1-buscap">
<div class="hp1-logo">
      <img src="/assets/images/nice library png 1.svg" />
      <img class="hp1-nome" src="/assets/images/Bookly.svg" />

  </div>

  <div class="hp1-busca">
      <div class="divBusca">
          <input type="text" id="txtBusca" placeholder="Buscar..." />
          <button><img src="/assets/images/lupa.svg" id="btnBusca" alt="Buscar" /></button>
      </div>
  </div>

  <div class="hp1-seus">
  <a href="../SuaSacola/index.html"><div class="hp1-bolsa"><img src="/assets/images/sua bolsa.svg" /></div> </a> 
      <div class="hp1-favorito"><img src="/assets/images/seus favoritos.svg" /></div>
  <a href="../Login/login.html"><div class="hp1-entre-cadastre"><img src="/assets/images/seu perfil.svg" /></div></a>    

  </div>
</div>
</ContainerPartecima>
    )
}