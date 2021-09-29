import { ContainerLogin } from "./styled";

export default function Conteudo() {
    return (

<ContainerLogin>
    <div class="inputs-login">
       
        <div class="logo"><img src="/assets/images/lo-logo.svg" alt="" /></div>
        <div class="titulo">Login:</div>
        <div class="login">
            <div class="email_login">E-mail</div>
            <div class="login-em">
            <input id="email_login" name="email_login" required="required" type="text"
              />
                </div>

        </div>
        <div class="login">
            <div class="senha_login">Senha</div>
        <div class="login-sn">
            <input id="senha_login" name="senha_login" required="required" type="password" />
        </div>

        </div>
        <div class="pt-baixo">
        <div class="esqueceu-senha">Esqueceu a senha?
        </div>
        <div class="criar-conta">
           Criar conta
        </div>
    </div>
        <div class="botao"><button>Entrar</button></div>
    </div>



    <div class="logo2">
        <div class="logoLivro"><img src="/assets/images/logo2.svg" alt=""/></div>

    </div>
    </ContainerLogin>   
     )
  };
  