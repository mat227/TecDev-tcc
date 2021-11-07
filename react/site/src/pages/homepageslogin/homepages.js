import { ContainerHome } from "./styled"
import { useState,useEffect } from 'react'
import ParteCima2 from "../../components/Common/partecima2/cima"
import { Link } from "react-router-dom"
import Rodape  from "../../components/Common/rodape/redape"
import Trio from "../../components/Common/trio/trio"
import Api from '../../service/apiAdm'
const api = new Api();


export default function Homepageslogin() {
    const [livro, setLivro] = useState([]);


    async function listar() {
        let a = await api.listarLivro();
        setLivro(a);
      }

      useEffect(() => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [listar()]);

      
    return (
    <ContainerHome>
          <ParteCima2/>
   
        <div class="conteiner-homepage1">


      

      
<Trio/>

       
            <div class="queridinhas">
                <div class="tlqueridinhasori">
                    <div class="tlqueridinhas1">
                        NOSSAS NOVAS QUERIDINHAS!
                    </div>
                    <div class="tlqueridinhas2">
                        Os livros mais populares do momento!
                    </div>
                </div>

                <div class="livros-queridinhas">

                    
             {livro.map ((item)=>(
<Link to={{pathname:"/descricao",state:item}}>
      <div class="box-livro">
                <div class="img-livro-queridinha">
                    <img        
                      src={item.ds_imagen}
                       alt=""
                       style={{ height: "190px", width: "185px" }}
                       />
                </div>
                <div class="box-informacoes-livros">
                    <div class="nome-livro-queridinhas">
                      {item.nm_livro}
                    </div>
                    <div class="autor-queridinhas">
{ item.ds_autora}   
                 </div>
                    <div class="preco-queridinhas">
                       R$ {item.vl_para}
                    </div>

                </div>

            </div>
            </Link>
              ))}
                </div>
            </div>
      


        </div>
        <Rodape />

    </ContainerHome>
    )  
}