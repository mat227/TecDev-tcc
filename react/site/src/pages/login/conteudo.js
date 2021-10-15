import { ContainerLogin } from "./styled"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useRef } from 'react'

import LoadingBar from 'react-top-loading-bar'
import Cookies from 'js-cookie';
import Api from '../../service/api'
import { useHistory } from 'react-router-dom';
const api = new Api();

export default function Conteudo() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


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
      <a href="/redefinir">  <div class="esqueceu-senha">Esqueceu a senha?        </div>
</a>
        <a href="/cadastro"><div class="criar-conta">
           Criar conta
        </div></a>
    </div>
       <a href="/"> <div class="botao"><button>Entrar</button></div></a>
    </div>



    <div class="logo2">
        <div class="logoLivro"><img src="/assets/images/logo2.svg" alt=""/></div>

    </div>
</ContainerLogin>   
     )
  };
  