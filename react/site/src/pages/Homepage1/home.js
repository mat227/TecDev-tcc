import { ContainerHome } from "./styled"
import { useState, useEffect } from 'react'
import Partecima from "../../components/Common/parteCima/componente"


import { Link } from "react-router-dom"
import Rodape from "../../components/Common/rodape/redape"
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
    <ContainerHome>
      <Partecima />

      <div class="conteiner-homepage1">





        <Trio />



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


            {livro.map((item) =>
              <Link to={{ pathname: "/descricao", state: item }}>
                <div class="box-livro">
                  <div class="img-livro-queridinha">
                    <img
                      src={item.ds_imagen}
                      alt=""
                      style={{ height: "185px", width: "170px" }}
                    />

                  </div>
                  <div class="box-informacoes-livros">
                    <div class="nome-livro-queridinhas">
                      {item.nm_livro}
                    </div>
                    <div class="autor-queridinhas">
                      {item.ds_autora}
                    </div>
                    <div class="preco-queridinhas">
                      R$ {item.vl_para}
                    </div>

                  </div>

                </div>
              </Link>
            )}
          </div>
        </div>



      </div>
      <Rodape />
    </ContainerHome>

  )
}