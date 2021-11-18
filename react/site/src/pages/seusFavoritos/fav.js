import {ContainerFav} from './styled';
import ParteCima from '../../components/Common/parteCima/index';
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
                                    <div class="imgl">
                                        <img src={item.ds_imagen}alt=""  style={{ height: "150px", width: "140px" }}/>
                                        <div class="tllivro">
                                           {item.nm_livro}
                                        </div>
                                        <div class="preco">
                                            R$ {item.vl_para}
                                        </div>
                                        <div class="botao-preco">
                                        <Link to={{pathname:"/descricao",state:item}}><button>Ver produto</button></Link>
                                        </div>
                                    </div>
                                    <hr/> 

                            </div>
 )}

                            <div class="excluir">
                              
                                    <div onClick={deleteAllCookies} class="tllivro2">
                                        Excluir todos favoritos       
                                    
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