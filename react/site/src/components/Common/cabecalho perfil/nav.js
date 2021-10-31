import { Link } from 'react-router-dom';
import { Nav}  from './navStyled.js';

export default function Cabecalho(Props){
    return(
        <Nav>
            <div class="nomeP">
                <h1>Olá, Fulano Siclano</h1>
                <label>{Props.nome}</label>
            </div>
            <div classNam="sair"><button><Link to='/login'>Sair</Link></button></div>
        </Nav>
    )
}