import { ContainerDesc } from "./desc.styled"

import Partecima  from "../../components/Common/parteCima/componente"
import { useState } from 'react'

import Rodape  from "../../components/Common/rodape/redape"
import { Link } from "react-router-dom"

export default function DescConteudo(props) {

    const [livro, setLivro] = useState(props.location.state);


    return (
        <ContainerDesc>
            <Partecima/>
        <div class="box-mae">
            <div class="box-filha">
                <div class="livro"><img src="/assets/images/o que o sol faz com as flores (1).svg"alt=""/></div>
                <div class="box1">
                    <div class="titulo">{livro.nm_livro}<img src="./assets/images/favorito.svg"  alt="" style={{height: "2em"}}/></div>
                    <div class="pagamentos">
                        <div class="preco">{livro.vl_para}</div>
                        <div class="item"><img src="/assets/images/boleto.svg" alt="boleto" class="boleto"/> <p><u>Boleto Bancário:</u>{livro.vl_para} <br/> Em até 3x de R$ 14,30</p></div>
                        <div class="item"><img src="/assets/images/cartao.svg" alt="cartao" class="cartao"/> <p><u>Cartão de Crédito</u> {livro.vl_para} <br/> Em até 3x de R$ 14,30</p></div>
                    </div>
                    <div class="botoes">
                      <Link to="/pagamento"><button>COMPRAR</button></Link>
                      <Link to="/suasacola"><button>ADICIONAR NA SACOLA</button></Link>
                    </div>
                    <hr/>
                    <div class="box2">
                        <div class="descricao">
                            <div class="titulodesc">DESCRIÇÃO:</div>
                            <p> {livro.ds_descricao}</p>
                        </div>
                        <div class="caracteristicas">
                            <div class="titulocarac">CARACTERÍSTICAS:</div>
                            <div class="menu">
                                <div class="itemc">Autor:<p>&nbsp;{livro.vl_para}</p></div>
                                <div class="itemc">Gêneros:<p>&nbsp;{livro.id_genero_infoc_tdv_genero.ds_genero}</p></div>
                                <div class="itemc">Editora:<p>&nbsp;{livro.vl_para}</p></div>
                                <div class="itemc">Ano da edição:<p>&nbsp;{livro.vl_para}</p></div>
                            </div>
                        </div>
                    </div>
                </div>     
       

            </div>

        </div>

        <Rodape/>


        </ContainerDesc>
    )
};