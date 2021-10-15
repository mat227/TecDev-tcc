import { Link } from "react-router-dom";
import { ContainerAdm_c_p } from "./adm_c_p.styled"



export default function Adm_c_p() {
    return (
        <ContainerAdm_c_p>
    <div className="container">

        <div className="cabecalho">
            <div className="perfil">
                <div className="foto_do_perfil">
                    <div className="adicionar">
                    <img src="/assets/images/+.svg"/>
                    </div>
                    <div className="bola"><img src="/assets/images/Ellipse 32.svg"  alt=""/></div>
                    <div className="adicionar_foto">Adicionar Foto</div>
                </div>
            </div>
            <div className="nome_adm"> 
                <div className="nome"> Olá, Fulano Siclano! </div>
                <div className="adm"> Administrador</div>
            </div>
        </div>
 
        <div className="conteudo">
            <div className="box_g">
                <div className="conteudo_esquerdo">
                    <div className="informacao">

                        <div className="botao1"><button>Livros</button></div>
                        <div className="botao_e"> <button>Cupons e <br></br> promoções</button> </div> 
                        <div className="botao2"><button>Suas informações</button></div>
                        <div className="botao3"><button>Pedidos</button></div>

                    </div>
                </div>
                <div className="conteudo_direito">
                    <div className="box">
                        <div className="titulo">
                                <div className="cupons_img">
                                    <img src="/assets/images/promocao.svg" alt=""/>
                                </div>
                            <div className="cupons"> Cupons </div>
                        </div>
                       
                        <div className="input_g">
                            <div className="agp_input">
                                <div className="agrp_input1">
                                    <div className="cupom">
                                        <div className="n_cupom"> Digite o nome do Cupom</div>
                                        <div className="nome_cupom">
                                        <input id="n_cupom" name="n_cupom" required="required" type="text"/>
                                        </div>
                                    </div>

                                    <div className="duracao">
                                        <div className="n_duracao"> Digite a Duração </div>
                                        <div className="nome_duracao">
                                        <input id="n_duracao" name="n_duracao" required="required" type="text"/>
                                        </div>
                                    </div>
                                   
                                    <div className="porcentagem">
                                        <div className="n_porcentagem">  Digite a Porcentagem </div>
                                        <div className="nome_porcentagem">
                                        <input id="n_porcentagem" name="n_porcentagem" required="required" type="text"/>
                                        </div>
                                    </div>
                                </div>


                                <div className="agrp_input2">

                                    <div className="disponivel">
                                        <div className="n_disponivel">  Disponivel</div>
                                        <div className="nome_disponivel">
                                        <input id="n_disponivel" name="n_disponivel" required="required" type="text"/>
                                        </div>
                                    </div>

                                    <div className="regras">
                                        <div className="n_regras">  Digite as Regras </div>
                                        <div className="nome_regras">
                                        <input id="n_regras" name="n_regras" required="required" type="text"/>
                                        </div>
                                    </div>
                            
                                    <div className="v_ac">
                                        <div className="img"> <img src="/assets/images/image(2).svg" alt=""/></div>
                                        <div className="botao"> Visualizar / Adicinar capa </div>
                                    </div>

                                </div>

                                <div className="agrp_3">
                                    <div className="adc_c">
                                        <div className="adicionar_cupom"> Adicionar outro cupom </div>
                                    </div>

                                    <div className="lixo">
                                        <div className="img_lixo"> <img src="/assets/images/lixinho.svg" alt=""/> </div>
                                        <div className="nome_lixo"> <button> Remover </button> </div>
                                    </div>
                                </div>

                            </div>
                        </div>                       

                        <div className="box-2">
                            <div className="titulo2">
                                <div className="promocao_img"><img src="/assets/images/promocao.svg" alt=""/></div>
                                <div className="promocao"> Promoções </div>
                            </div>
                    
                            <div className="input_g2">
                                <div className="agp_input2">
                                    <div className="agrp_input4">
                                        <div className="livro_input">
                                            <div className="n_livro"> Digite o Nome do Livro </div>
                                            <div className="nome_livro">
                                            <input id="n_livro" name="n_livro" required="required" type="text"/>
                                            </div>
                                        </div>

                                        <div className="valor">
                                            <div className="n_valor"> Valor Anterior </div>
                                            <div className="nome_valor">
                                            <input id="n_valor" name="n_valor" required="required" type="number"/>
                                            </div>
                                        </div>
                                    
                                        <div className="atual">
                                            <div className="n_atual">  Digite a Porcentagem </div>
                                            <div className="nome_atual">
                                            <input id="n_atual" name="n_atual" required="required" type="number"/>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="agrp_input5">

                                        <div className="disponivel2">
                                            <div className="n_disponivel2">  Disponivel</div>
                                            <div className="nome_disponivel2">
                                            <input id="n_disponivel2" name="n_disponivel2" required="required" type="text"/>
                                            </div>
                                        </div>

                                        <div className="duracao2">
                                            <div className="n_duracao2">  Digite a Duração </div>
                                            <div className="nome_duracao2">
                                            <input id="n_duracao2" name="n_duracao2" required="required" type="text"/>
                                            </div>
                                        </div>
                                
                                        <div className="adc_p">
                                            <div className="adicionar_promocao"> Adicionar outra promoção</div>
                                        
                                        </div>

                                    </div>

                                    <div className="agrp_6">
                                        <div className="lixo2">
                                            <div className="img_lixo2"> <img src="/assets/images/lixinho.svg" alt=""/> </div>
                                            <div className="nome_lixo2"> <button> Remover </button> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="redes">
                <div className="logo"> 
                    <div className="img_logo">
                        <img src="/assets/images/logo_atual.svg" alt=""/>
                    </div>
                    <div className="tecdev"> by TecDev </div>
                </div>
                <div className="redes_sociais"> 
                    <div className="instagram">
                        <img src="/assets/images/Vector.svg" alt=""/>
                    </div>
                    <div className="facebook">
                        <img src="/assets/images/Vector(1).svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
         </ContainerAdm_c_p>
    )
}       