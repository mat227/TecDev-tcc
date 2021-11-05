import {Container} from './styled';
import Cabecalho  from '../../components/Common/parteCima/componente'
import Rodape from '../../components/Common/rodape/redape'
import Barralat from '../../components/Common/barra_lateal_perfi';
// import Api  from '../../service/apiAdm';
// import {useState } from 'react';

// const api = new Api();

export default function PerfilAdm(){

//   const [infoa, setInfoa] = useState([]);

//     const infoA = async () => {
//         let r = await api.infoA();
//       setInfoa(r);
//     }
   return(
       <div>
          <Cabecalho />
          <Container> 
            <div class="box_g">
                <Barralat />
                <div class="conteudo_direito">
                    <div class="box">
                        <div class="titulo">
                            <div class="perfil_img"><img src="./assets/images/profilee (1).svg" alt='' /></div>
                            <div class="perfil"> Suas Informações </div>

                            <div class="ed_info" > Editar <br /> informações </div>
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