import {ContainerFav} from './styled';
import ParteCima from '../../components/Common/parteCima/componente';
import Rodape from '../../components/Common/rodape/redape'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Cookie from 'js-cookie';
import { useEffect } from 'react';

export default function Favoritos(){

    const [livro, setLivro] = useState([]);

    useEffect(carregarFavoritos, []);



  function carregarFavoritos() {
    
    let favorito = Cookie.get('favorito');
    favorito = favorito !== undefined 
                  ? JSON.parse(favorito) 
                  : [];
    setLivro(favorito);
  }

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }

    carregarFavoritos()
}
function marcarTodos(marcar){
    var itens = document.querySelectorAll("input");

    var i = 0;
    for(i=0; i<itens.length;i++){
        itens[i].checked = marcar;
    }
}


   return(
      <ContainerFav>
          <ParteCima/>
          <div class="fav-container">
        <div class="conteiner">
              
            <div class="titulo">
                <div class="quadrado" style={{marginRight: "0.5em"}}></div>
                    <p>Favoritos</p>
                <div class="quadrado" style={{marginRight: "0.5em"}}></div>
            </div>

            <div class="box-mae">

                        <div class="selecao-livro">
                        {livro.map((item) => 
                           

                            <div class="box-livros">
                                <div class="exemplo-radio">     <input type="checkbox" value="0"
                                    name="campo-checkbox" id="campo-checkbox" style={{accentColor: "blue"}}/> 
                                       <label for="campo-checkbox" ></label></div>
                                    <div class="imgl">
                                        <img src="/assets/images/COMÉDIA 1.svg" alt=""/>
                                        <div class="tllivro">
                                           {item.nm_livro}
                                        </div>
                                        <div class="preco">
                                            {item.vl_para}
                                        </div>
                                        <div class="botao-preco">
                                        <Link to={{pathname:"/descricao",state:item.id_livro}}><button>Ver produto</button></Link>
                                        </div>
                                    </div>
                                    <hr/> 

                            </div>
 )}

                            <div class="excluir">
                                <div class="exemplo-radio">     <input onClick={marcarTodos} type="checkbox" value="0"
                                    name="campo-checkbox" id="campo-checkbox"style={{accentColor: "blue"}}/>    <label
                                    for="campo-checkbox" ></label></div>
                                    <div onClick={deleteAllCookies} class="tllivro2">
                                        Excluir favoritos       
                                        <div class="tllivro3">
                                            Favoritos 1 - 2 de 2
            
                                        </div>
                                    
                                    </div>
                            </div>
                           
                    </div>
                        </div>

</div>
</div>
          

          <Rodape/>
      </ContainerFav>
   )
}