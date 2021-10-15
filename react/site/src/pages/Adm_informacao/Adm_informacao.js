import { Link } from "react-router-dom";
import { ContainerCadastro } from "./adm_info.styled"



export default function Adm_informacao() {
    return (
        <ContainerAdm_informacao>
    <div classNameName="container">

        <div className="cabecalho">
            <div className="perfil">
                <div className="foto_do_perfil">
                    <div className="adicionar">
                    <img src="../Adm_informacao/assets/images/+.svg"/>
                    </div>
                    <div className="bola"><img src="/assets/images/Ellipse 32.svg" alt=""/></div>
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
                        <div className="botao2"> <button>Cupons e <br/>promoções</button> </div> 
                        <div className="botao_e"><button>Suas informações</button></div>
                        <div className="botao3"><button>Pedidos</button></div>

                    </div>
                </div>

                <div className="conteudo_direito">
                    <div className="box">
                        <div className="titulo">
                            <div className="perfil_img"><img src="/assets/images/profile.svg" alt=""/></div>
                            <div className="perfil"> Suas Informações </div>

                            <div className="ed_info"> Editar <br/> informações </div>
                        </div>
                        <div className="input_g">
                            <div className="agp_input">
                                <div className="agrp_input1">
        
                                    <div className="nome_ad">
                                        <div className="n_nome_ad"> Nome:</div>
                                        <div className="nome_nome_ad">
                                        _____________________________________
                                        </div>
                                    </div>
        
                                    <div className="sobrenome">
                                        <div className="n_sobrenome"> Sobrenome: </div>
                                        <div className="nome_sobrenome">
                                        <input id="n_sobrenome" name="n_sobrenome" required="required" type="text"/>
                                        </div>
                                    </div>
                                   
                                </div>
        
        
                                <div className="agrp_input2">
        
                                    <div className="email">
                                        <div className="n_email"> Email: </div>
                                        <div className="nome_email">
                                        <input id="n_email" name="n_email" required="required" type="email"/>
                                        </div>
                                    </div>
        
                                    <div className="senha">
                                        <div className="n_senha"> Senha </div>
                                        <div className="nome_senha">
                                        <input id="n_senha" name="n_senha" required="required" type="password"/>
                                        </div>
                                    </div>
        
                                </div>
        
                                <div className="agrp_input3">
        
                                    <div className="endereco">
                                        <div className="n_endereco"> Endereço: </div>
                                        <div className="nome_endereco">
                                        <input id="n_endereco" name="n_endereco" required="required" type="text"/>
                                        </div>
                                    </div>
        
                                    <div className="complemento">
                                        <div className="n_complemento"> Complemento </div>
                                        <div className="nome_complemento">
                                        <input id="n_complemento" name="n_complemento" required="required" type="password"/>
                                        </div>
                                    </div>
        
                                </div>

                                
                                <div className="agrp_input4">
        
                                    <div className="bairro">
                                        <div className="n_bairro"> Bairro: </div>
                                        <div className="nome_bairro">
                                        <input id="n_bairro" name="n_bairro" required="required" type="email"/>
                                        </div>
                                    </div>
        
                                </div>

                                
                                <div className="agrp_input5">
        
                                    <div className="telefone">
                                        <div className="n_telefone"> Telefone: </div>
                                        <div className="nome_telefone">
                                        <input id="n_telefone" name="n_telefone" required="required" type="tel"/>
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

        </ContainerAdm_informacao>

    )

}