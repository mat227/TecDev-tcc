import { ContainerLogin } from "./styled"
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom"

import Api from '../../service/apiLogin'
import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie';


const api = new Api();

export default function Conteudo() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navig = useHistory();

    const logar = async () => {
        
        let resp = await api.loginn(email, senha);
        console.log(resp);
        if (resp.erro) {
            toast.error(`${resp.erro}`);
        } else {
            Cookies.set('usuario-logado', JSON.stringify(resp));
            navig.push('/homepage');
            
        }

    }

    const logaradm = async () => {
        
        let resp = await api.loginadm(email, senha);
        if (resp.erro) {
            toast.error(`${resp.erro}`);
        } else {
            Cookies.set('usuario-logado', JSON.stringify(resp));
            navig.push('/adm_livro');
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
         
            <div class="login-em">
            <input
                 value={email}
                 onChange={e => setEmail(e.target.value)} 
            id="email_login" name="email_login" required="required" type="text"
              />
                </div>

        </div>
        <div class="login">
            <div class="senha_login">Senha</div>

        <div class="login-sn">
            <input 
             value={senha}
             onChange={e => setSenha(e.target.value)}
            id="senha_login" name="senha_login" required="required" type="password" />
        </div>

        </div>
        <div class="pt-baixo">
      <Link to="/redefinir">  <div class="esqueceu-senha">Esqueceu a senha?        </div>
</Link>
        <Link to="/cadastro"><div class="criar-conta">
           Criar conta
        </div></Link>
    </div>

            <div class="botao">
                <button  onClick={() => logar()}>Entrar</button>
                </div>
    </div>



    <div class="logo2">
        <div class="logoLivro"><img onClick={logaradm}src="/assets/images/logo2.svg" alt=""/></div>

    </div>
</ContainerLogin>   
     )
  };
  