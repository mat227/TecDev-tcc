import { ContainerCadastro } from "./cadas.styled"


export default function Cadastro() {
    return (
        <ContainerCadastro>
                    <div class="Conteiner-cadastrar">

            <div class="box1">
                <div class="titulo">Cadastro</div>
                <div class="img-logo"><img src="/assets/images/logo atual.svg"  alt=""/></div>

            </div>
            <div class="inputs-criar">
                <div class="cadastrar">

                    <div class="Nome_cadastrar">Nome</div>
                    <div class="cadastrar-sn">
                        <input id="nome_cadastrar" name="nome_cadastrar" required="required" type="text" />
                    </div>
                    <div class="cpf_cadastrar">C.P.F</div>
                    <div class="cadastrar-sn">
                        <input id="cpf_cadastrar" name="cpf_cadastrar" required="required" type="text" value="000.000.000-00"/>
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

                    <div class="pt-baixo">
                        
                        <div class="vincular-conta">
                            <img src="/assets/images/facebook.svg" alt="" />
                        </div>
                        <div class="vincular-conta">
                            <img src="/assets/images/google.svg" alt="" />
                        </div>
                
                        <div class="botao"><a href="../Login/login.html"><button>Cadastrar</button></a></div>
                    </div>
                </div>
                

                </div>

            </div>

        </ContainerCadastro>




    )

}

