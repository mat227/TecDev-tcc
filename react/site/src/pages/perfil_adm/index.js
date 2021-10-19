import {Container} from './styled';
import Cabecalho  from '../../components/Common/parteCima/componente'
import Rodape from '../../components/Common/rodape/redape'
import { Link } from 'react-router-dom';

export default function perfilAdm(){
   return(
       <div>
          <Cabecalho />
          <Container> 
            <div class="box_g">
                <div class="conteudo_esquerdo">
                    <div class="informacao">

                        <div class="botao1"><button><Link to=''>Livros</Link></button></div>
                        <div class="botao2"> <button>Cupons e <br />promoções</button> </div> 
                        <div class="botao_e"><button>Suas informações</button></div>
                        <div class="botao3"><button>Pedidos</button></div>

                    </div>
                </div>

                <div class="conteudo_direito">
                    <div class="box">
                        <div class="titulo">
                            <div class="perfil_img"><img src="./assets/images/profilee (1).svg" alt='' /></div>
                            <div class="perfil"> Suas Informações </div>

                            <div class="ed_info"> Editar <br /> informações </div>
                        </div>
                        <div class="input_g">
                            <div class="agp_input">
                                <div class="agrp_input1">
        
                                    <div class="nome_ad">
                                        <div class="n_nome_ad"> Nome:</div>
                                        <div class="nome_nome_ad">
                                        <input id="n_nome_ad" name="n_nome_ad" required="required" type="text"/>
                                        </div>
                                    </div>
        
                                    <div class="sobrenome">
                                        <div class="n_sobrenome"> Sobrenome: </div>
                                        <div class="nome_sobrenome">
                                        <input id="n_sobrenome" name="n_sobrenome" required="required" type="text"/>
                                        </div>
                                    </div>
                                    
                                </div>
        
        
                                <div class="agrp_input2">
        
                                    <div class="email">
                                        <div class="n_email"> Email: </div>
                                        <div class="nome_email">
                                        <input id="n_email" name="n_email" required="required" type="email"/>
                                        </div>
                                    </div>
        
                                    <div class="senha">
                                        <div class="n_senha"> Senha </div>
                                        <div class="nome_senha">
                                        <input id="n_senha" name="n_senha" required="required" type="password"/>
                                        </div>
                                    </div>
        
                                </div>
        
                                <div class="agrp_input3">
        
                                    <div class="endereco">
                                        <div class="n_endereco"> Endereço: </div>
                                        <div class="nome_endereco">
                                        <input id="n_endereco" name="n_endereco" required="required" type="text"/>
                                        </div>
                                    </div>
        
                                    <div class="complemento">
                                        <div class="n_complemento"> Complemento </div>
                                        <div class="nome_complemento">
                                        <input id="n_complemento" name="n_complemento" required="required" type="password"/>
                                        </div>
                                    </div>
        
                                </div>

                                
                                <div class="agrp_input4">
        
                                    <div class="bairro">
                                        <div class="n_bairro"> Bairro: </div>
                                        <div class="nome_bairro">
                                        <input id="n_bairro" name="n_bairro" required="required" type="email"/>
                                        </div>
                                    </div>
        
                                </div>

                                
                                <div class="agrp_input5">
        
                                    <div class="telefone">
                                        <div class="n_telefone"> Telefone: </div>
                                        <div class="nome_telefone">
                                        <input id="n_telefone" name="n_telefone" required="required" type="tel"/>
                                        </div>
                                    </div>
        
                                </div>
        
                            </div>
                        </div> 
                    </div> 

                </div>

            </div>
        </Container>
        <Rodape />
      </div>  
   )
}