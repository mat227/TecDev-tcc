import { ContainerHome } from "./home.styled"

import { ContainerPartecima } from "../../components/parteCima/componente"

import { ContainerRodape } from "../../components/rodape/redape"


export default function Homepage() {
    return (
    <ContainerHome>
          <ContainerPartecima/>
   
        <div class="conteiner-homepage1">


        <div class="hp1-buscap">
        <div class="hp1-logo">
                <img src="/assets/images/nice library png 1.svg" alt=""/>
                <img class="hp1-nome" src="/assets/images/Bookly.svg" alt=""/>

            </div>

            <div class="hp1-busca">
                <div class="divBusca">
                    <input type="text" id="txtBusca" placeholder="Buscar..." />
                    <button><img src="/assets/images/lupa.svg" id="btnBusca" alt="Buscar" /></button>
                </div>
            </div>

            <div class="hp1-seus">
            <a href="../SuaSacola/index.html"><div class="hp1-bolsa"><img src="../HomePage1/assets/images/sua bolsa.svg" /></div> </a> 
                <div class="hp1-favorito"><img src="/assets/images/seus favoritos.svg" alt=""/></div>
            <a href="../Login/login.html"><div class="hp1-entre-cadastre"><img src="/assets/images/seu perfil.svg" alt=""/></div></a>    

            </div>
        </div>




        <div class="oferta-da-semana">
            <div class="trio">
            <a href="../Gênero/src/pages/genero.html">  <button><img src="../HomePage1/assets/images/triste-feliz.svg" id="btnBusca" alt="Buscar" /></button> </a>
                <button><img src="/assets/images/caracoracao.svg" id="btnBusca" alt="Buscar" /></button>
                <button><img src="/assets/images/desconto.svg" id="btnBusca" alt="Buscar" /></button>


            </div>
            <div class="trio2">
                <div class="titilo-trio1">GÊNEROS</div>
                <div class="titilo-trio2">PROMOÇÕES</div>
                <div class="titilo-trio3">CUPONS</div>
            </div>

            <div class="hp1-titulo">OFERTAS DA SEMANA!</div>

        
            <div class="CSSgal">

                <s id="s1"></s> 
                <s id="s2"></s>
                
            
                <div class="slider">
                    <div class="selecao-especial">
                        <div class="slide-titulos">

                            <div class="til1">
                                Seleção especial de livros
                            </div>
                            <div class="til2">
                                com ate 50% de desconto
                            </div>
                            <div class="botao-slide2">
                                <a href="../Desconto/desconto.html"><button>Confira</button></a>
                            </div>

                        </div>

                        <div class="img-combo">
                            <img src="/assets/images/selecao.png" alt=""/>
                        </div>


                    </div>
                    <div class="selecao-livro">

                        <div class="box-livros">
                            <div class="imgt">
                                <div class="imgl">
                                    <img src="/assets/images/COMÉDIA 1.svg" alt=""/>
                                </div>
                                <div class="tllivro">
                                    A Divina Comédia Inferno - Dante Alighieri
                                </div>

                            </div>
                            <div class="box-precos">
                                <div class="precos">
                                    <div class="preco-de">
                                        <s>R$ 53,00</s>
                                    </div>
                                    <div class="por">
                                        R$ 43,00
                                    </div>
                                    <div class="botao-preco">
                                        <a href="../DescricaoLivro/descricao.html"><button>Saiba Mais</button></a>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="box-livros">
                            <div class="imgt">
                                <div class="imgl">
                                    <img src="/assets/images/SUSPENSE1 1.svg"  alt=""/>
                                </div>
                                <div class="tllivro">
                                    Caixa de Pássaros - Josh Malerman </div>

                            </div>
                            <div class="box-precos">
                                <div class="precos">
                                    <div class="preco-de">
                                        <s> R$ 40,00</s>
                                    </div>
                                    <div class="por">
                                        R$ 19,80
                                    </div>
                                    <div class="botao-preco2">
                                        <a href="../DescricaoLivro/descricao.html"><button>Saiba Mais</button></a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                
                </div>
                
                <div class="prevNext">
                <div><a href="#s4"></a><a href="#s2"></a></div>
                <div><a href="#s1"></a><a href="#s3"></a></div>
                
                </div>
            
                <div class="bullets">
                <a href="#s1">1</a>
                <a href="#s2">2</a>
                
                </div>
            
            </div>

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
                <a href="../DescricaoLivro/descricao.html"> <div class="box-livro">
                        <div class="img-livro-queridinha">
                            <img src="/assets/images/vermelho, branco e sangue azul.svg" alt="" />
                        </div>
                        <div class="box-informacoes-livros">
                            <div class="nome-livro-queridinhas">
                                VERMELHO, BRANCO E SANGUE AZUL

                            </div>
                            <div class="autor-queridinhas">
                                Casey Mcquiston
                            </div>
                            <div class="preco-queridinhas">
                                R$ 49,90
                            </div>

                        </div>
                    </div>
                </a>
                <a href="../DescricaoLivro/descricao.html"> <div class="box-livro">
                    <div class="img-livro-queridinha">
                        <img src="/assets/images/vermelho, branco e sangue azul.svg" alt=""/>
                    </div>
                    <div class="box-informacoes-livros">
                        <div class="nome-livro-queridinhas">
                            VERMELHO, BRANCO E SANGUE AZUL

                        </div>
                        <div class="autor-queridinhas">
                            Casey Mcquiston
                        </div>
                        <div class="preco-queridinhas">
                            R$ 49,90
                        </div>

                    </div>
                </div>
            </a>
            <a href="../DescricaoLivro/descricao.html"> <div class="box-livro">
                <div class="img-livro-queridinha">
                    <img src="/assets/images/vermelho, branco e sangue azul.svg" alt=""/>
                </div>
                <div class="box-informacoes-livros">
                    <div class="nome-livro-queridinhas">
                        VERMELHO, BRANCO E SANGUE AZUL

                    </div>
                    <div class="autor-queridinhas">
                        Casey Mcquiston
                    </div>
                    <div class="preco-queridinhas">
                        R$ 49,90
                    </div>

                </div>
            </div>
        </a>
                </div>
                <div class="livros-queridinhas2">
                    <a href="../DescricaoLivro/descricao.html"> <div class="box-livro">
                        <div class="img-livro-queridinha">
                            <img src="/assets/images/vermelho, branco e sangue azul.svg"  alt=""/>
                        </div>
                        <div class="box-informacoes-livros">
                            <div class="nome-livro-queridinhas">
                                VERMELHO, BRANCO E SANGUE AZUL

                            </div>
                            <div class="autor-queridinhas">
                                Casey Mcquiston
                            </div>
                            <div class="preco-queridinhas">
                                R$ 49,90
                            </div>

                        </div>
                    </div>
                </a>
                <a href="../DescricaoLivro/descricao.html"> <div class="box-livro">
                    <div class="img-livro-queridinha">
                        <img src="/assets/images/vermelho, branco e sangue azul.svg" alt=""/>
                    </div>
                    <div class="box-informacoes-livros">
                        <div class="nome-livro-queridinhas">
                            VERMELHO, BRANCO E SANGUE AZUL

                        </div>
                        <div class="autor-queridinhas">
                            Casey Mcquiston
                        </div>
                        <div class="preco-queridinhas">
                            R$ 49,90
                        </div>

                    </div>
                </div>
            </a>
            <a href="../DescricaoLivro/descricao.html"> <div class="box-livro">
                <div class="img-livro-queridinha">
                    <img src="/assets/images/vermelho, branco e sangue azul.svg" alt=""/>
                </div>
                <div class="box-informacoes-livros">
                    <div class="nome-livro-queridinhas">
                        VERMELHO, BRANCO E SANGUE AZUL

                    </div>
                    <div class="autor-queridinhas">
                        Casey Mcquiston
                    </div>
                    <div class="preco-queridinhas">
                        R$ 49,90
                    </div>

                </div>
            </div>
        </a>
                </div>

            </div>
        </div>

        <footer>
            <div class="logowo"><img src="/assets/images/logo atual.svg" alt="" />by: TecDev</div>
            <div class="redes"> <img src="/assets/images/insta.svg" alt="" />
                <img src="/assets/images/facebook.svg" alt="" /></div>
        </footer>


        </div>
        <ContainerRodape />

    </ContainerHome>
    )  
}