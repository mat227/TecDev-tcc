import { Link } from "react-router-dom";
import { ContainerCadastro } from "./cadas.styled"



export default function Cadastro() {
    return (
        <ContainerCadastro>

                    <div class="Conteiner-cadastrar">

            <div class="box1">
                <div class="titulo">Cadastro</div>
                <div class="img-logo"><img src="/assets/images/logo-cadas.svg"  alt=""/></div>

            </div>
            <div class="inputs-criar">
                <div class="cadastrar">

                    <div class="Nome_cadastrar">Nome</div>
                    <div class="cadastrar-sn">
                        <input id="nome_cadastrar" name="nome_cadastrar" required="required" type="text" />
                    </div>
                    <div class="Nome_cadastrar">Sobrenome</div>
                    <div class="cadastrar-sn">
                        <input id="nome_cadastrar" name="nome_cadastrar" required="required" type="text" />
                    </div>
                    <div class="cpf_cadastrar">C.P.F</div>
                    <div class="cadastrar-sn">
                        <input id="cpf_cadastrar" name="cpf_cadastrar" required="required" type="text" placeholder="000.000.000-00"/>
                    </div>
                    <div class="email_cadastrar">E-mail</div>
                    <div class="cadastrar-sn">
                        <input id="email_cadastrar" type="email" name="email_cadastrar" required="required"  />
                    </div>

                    <div class="senha_cadastrar">Senha</div>
                    <div class="cadastrar-sn">
                        <input id="senha_cadastrar" name="senha_cadastrar" required="required" type="password" />
                    </div>
                    <div class="senha_cadastrar">Confirmar senha</div>
                    <div class="cadastrar-sn">
                        <input id="senha_cadastrar" name="senha_cadastrar" required="required" type="password" />
                    </div>
                    <div class="data_cadastrar">Data de nascimento</div>
                    <div class="cadastrar-sn">
                        <input id="data_cadastrar" name="data_cadastrar" type="date" required="required"  />
                    </div>
                    <div class="data_cadastrar">Telefone</div>
                    <div class="cadastrar-sn">
                        <input id="telefone" name="telefone"  required="required"  />
                    </div>
                    <div class="data_cadastrar">Endereço</div>
                    <div class="cadastrar-sn">
                        <input id="rua" name="rua" type="text" required="required"  />
                    </div>
                    <div class="data_cadastrar">Complemento</div>
                    <div class="cadastrar-sn">
                        <input id="cl_casa" name="cl_casa"  required="required"  />
                    </div>
                    <div class="data_cadastrar">Bairro</div>
                    <div class="cadastrar-sn">
                        <input id="br_casa" name="br_casa"  required="required"  />
                    </div>
                    

                    <div class="pt-baixo">
                        
                        <div class="vincular-conta">
                            <img src="/assets/images/facebook-cadas.svg" alt="" />
                        </div>
                        <div class="vincular-conta">
                            <img src="/assets/images/google.svg" alt="" />
                        </div>
                
                        <div class="botao"><Link to="/login"><button>Cadastrar</button></Link></div>
                    </div>
                </div>
                

                </div>

            </div>


        </ContainerCadastro>




    )

}

