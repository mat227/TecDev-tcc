import { ContainerDesconto } from "./styled"
import Partecima  from "../../components/Common/parteCima/componente"
import { useState,useEffect } from 'react'
import { Link } from "react-router-dom"
import Rodape  from "../../components/Common/rodape/redape"
import Trio from "../../components/Common/trio/trio"
import Api from '../../service/apiAdm'
const api = new Api();


export default function Homepage() {
    const [livro, setLivro] = useState([]);


    async function listar() {

        let a = await api.listarLivro();
        setLivro(a);

      }


      useEffect(() => {
        listar();
      }, []);
    return (
    <ContainerDesconto>
          <Partecima/>

          <div class="oferta-da-semana">

            <div class="desconto">
            <Trio/>

                <div class="tldescontoori">
                    <div class="tldesconto1">
                        Seleção de livros com <br/> até 50% de desconto
                    </div>
                    <div class="timer">
                    </div>
                </div>

                <div class="livros-desconto">

                    {livro.map((item)=>(
                  
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
                            <div class="nome-livro-desconto">
                               {item.nm_livro}

                            </div>
                            <div class="autor-desconto">
                            { item.ds_autora}   

                            </div>
                            <div class="preco-descontotr">
                            R$ { item.vl_de}   

                              </div>
                              <div class="preco-desconto">
                              R$ { item.vl_para}   

                                </div>

                        </div>
                    </div>

                </Link>
                    ))}
                
        </div>
        </div>
        </div>

        <Rodape />

    </ContainerDesconto>
    )  
}