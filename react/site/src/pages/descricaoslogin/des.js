import { ContainerDesc } from "./styled"

import ParteCima2 from "../../components/Common/partecima2/cima"
import { useState } from 'react'

import Rodape  from "../../components/Common/rodape/redape"
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom';

import Cookie from 'js-cookie';

export default function DescConteudo(props) {

    const [livro] = useState(props.location.state);
   
    return (
        <ContainerDesc>
            <ParteCima2/>
        <div class="box-mae">
            <div class="box-filha">
                <div class="livro"><img src={livro.ds_imagen}alt=""/></div>
                <div class="box1">
                    <Link to="/login">
                    <div class="titulo">{livro.nm_livro}<img  src="./assets/images/favorito.svg"  alt="" style={{height: "2em"}}/></div>
                   </Link>
                    <div class="pagamentos">
                        <div class="preco">R${livro.vl_para}</div>
                        <div class="item"><img src="/assets/images/boleto.svg" alt="boleto" class="boleto"/> <p><u>Boleto Bancário:</u>{livro.vl_para} <br/> Em até 2x de R$ {livro.vl_para/2}</p></div>
                        <div class="item"><img src="/assets/images/cartao.svg" alt="cartao" class="cartao"/> <p><u>Cartão de Crédito</u> {livro.vl_para} <br/> Em até 2x de R$ {livro.vl_para/2}</p></div>
                    </div>
                    <div class="botoes">
                      <Link to="/login"><button >ADICIONAR NA SACOLA</button></Link>
                    </div>
                    <hr/>
                    <div class="box2">
                        <div class="descricaoa">
                            <div class="titulodesc">DESCRIÇÃO:</div>
                            <p> {livro.ds_descricao}</p>
                        </div>
                        <div class="caracteristicas">
                            <div class="titulocarac">CARACTERÍSTICAS:</div>
                            <div class="menu">
                                <div class="itemc">Autor:&nbsp;{livro.ds_autora}</div>
                                <div class="itemc">Gêneros:&nbsp;{livro.id_genero}</div>
                                <div class="itemc">Editora:&nbsp;{livro.ds_editora}</div>
                                <div class="itemc">Ano da edição:&nbsp;{livro.dt_lancamento.substring(0,10)}</div>
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