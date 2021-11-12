import { Link } from 'react-router-dom';
import { Nav}  from './navStyled.js';
import Cookie from 'js-cookie';
import { useHistory } from 'react-router';
import {  useState } from 'react';


function lerUsuarioLogado (navigation) {
    let logado = Cookie.get('usuario-logado')
    if (logado == null) {
        navigation.push('/')
        return null;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado; 
}
export default function Cabecalho(Props){

    const deslogar = () => {
        Cookie.remove('usuario-logado');
    }

    const nav = useHistory();

    const usuarioLogado = lerUsuarioLogado(nav) || {};
 console.log(usuarioLogado)
    const [info] = useState(JSON.parse(Cookie.get('usuario-logado')))
 console.log(info);
 
   

    return(
        <Nav>
            <div class="nomeP">
                <h1>Olá, {info.nm_cliente}</h1>
                <label>{Props.nome}</label>
            </div>
            <div classNam="sair"><button value={deslogar}><Link to='/login'>Sair</Link></button></div>
        </Nav>
    )
}