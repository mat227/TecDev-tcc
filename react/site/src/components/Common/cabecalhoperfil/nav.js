import { Link } from 'react-router-dom';
import { Nav}  from './navStyled.js';
import Cookie from 'js-cookie';

export default function Cabecalho(Props){

    const deslogar = () => {
        Cookie.remove('usuario-logado');
    }

    return(
        <Nav>
            <div class="nomeP">
                <h1>Olá, Fulano Siclano</h1>
                <label>{Props.nome}</label>
            </div>
            <div classNam="sair"><button value={deslogar}><Link to='/login'>Sair</Link></button></div>
        </Nav>
    )
}