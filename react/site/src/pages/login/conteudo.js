import { ContainerLogin } from "./styled"
import { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'

import Api from '../../service/api'
import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie';

const api = new Api();

export default function Conteudo() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navig = useHistory();
    const loading = useRef(null);

    const logar = async () => {
        
        let resp = await api.login(email, senha);
        if (resp.erro) {
            toast.error(`${resp.erro}`);
            loading.current.complete();
        } else {
            Cookies.set('usuario-logado', JSON.stringify(resp));
            navig.push('/');
        }

    }

    return (

<ContainerLogin>
<ToastContainer />

    <div class="inputs-login">

       
        <div class="logo"><img src="/assets/images/lo-logo.svg" alt="" /></div>
        <div class="titulo">Login:</div>
        <div class="login">
            <div class="email_login">E-mail</div>
            <email_login
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <div class="login-em">
            <input id="email_login" name="email_login" required="required" type="text"
              />
                </div>

        </div>
        <div class="login">
            <div class="senha_login">Senha</div>
            <senha_login
              value={senha}
              onChange={e => setSenha(e.target.value)} />
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

            <div class="botao">
                <button  onClick={logar}>Entrar</button>
                </div>
    </div>



    <div class="logo2">
        <div class="logoLivro"><img src="/assets/images/logo2.svg" alt=""/></div>

    </div>
</ContainerLogin>   
     )
  };
  