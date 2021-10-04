import { ContainerDesc } from "./desc.styled"

import Partecima  from "../../components/Common/parteCima/componente"

import Rodape  from "../../components/Common/rodape/redape"


export default function DescConteudo() {
    return (
        <ContainerDesc>
     <Partecima/>
     <div className="conteiner">
        <div class="box-mae">
            <div class="box-filha">
                <div class="livro"><img src="/assets/images/o que o sol faz com as flores (1).svg"alt=""/></div>
                <div class="box1">
                    <div class="titulo">O QUE O SOL FAZ COM AS FLORES<img src="./assets/images/favorito.svg"  alt="" style={{height: "2em"}}/></div>
                    <div class="pagamentos">
                        <div class="preco">R$ 42,90</div>
                        <div class="item"><img src="/assets/images/boleto.svg" alt="boleto" class="boleto"/> <p><u>Boleto Bancário:</u> R$ 42,90 <br/> Em até 3x de R$ 14,30</p></div>
                        <div class="item"><img src="/assets/images/cartao.svg" alt="cartao" class="cartao"/> <p><u>Cartão de Crédito</u> R$ 42,90 <br/> Em até 3x de R$ 14,30</p></div>
                    </div>
                    <div class="botoes">
                        <div class="um"><button>COMPRAR</button></div>
                        <div class="dois"><button>ADICIONAR NA SACOLA</button></div>
                    </div>
                    <hr/>
                    <div class="box2">
                        <div class="descricao">
                            <div class="titulodesc">DESCRIÇÃO:</div>
                            <p> O Que O Sol Faz Com As Flores é uma coletânea de poemas 
                                arrebatadores sobre crescimento e cura, ancestralidade e honrar as raízes, expatriação e o amadurecimento até encontrar um lar dentro de você. Organizado em cinco capítulos e ilustrado por Rupi Kaur, o livro percorre uma extraordinária jornada dividida em murchar, cair, enraizar, crescer, florescer. Uma celebração do amor em todas as suas formas. Essa é a receita da vida minha mãe disse me abraçando enquanto eu chorava pense nas flores que você planta a cada ano no jardim elas nos ensinam que as pessoas também murcham caem criam raiz crescem para florescer no final.</p>
                        </div>
                        <div class="caracteristicas">
                            <div class="titulocarac">CARACTERÍSTICAS:</div>
                            <div class="menu">
                                <div class="itemc">Autor:<p>&nbsp;Rupi Kaur</p></div>
                                <div class="itemc">Gêneros:<p>&nbsp;Poesia</p></div>
                                <div class="itemc">Editora:<p>&nbsp;Planeta do Brasil</p></div>
                                <div class="itemc">Acabamento:<p>&nbsp;Brochura</p></div>
                                <div class="itemc">Ano da edição:<p>&nbsp;2018</p></div>
                            </div>
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