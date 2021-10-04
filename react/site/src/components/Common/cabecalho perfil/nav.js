import { Nav}  from './navStyled.js';

export default function Cabecalho(Props){
    return(
        <Nav>
            <div class="imgP">
                <img src="./assets/images/perfilA.png" alt ='' />
                <div class="alt_img">Alterar imagem</div>
            </div>
            <div class="nomeP">
                <h1>Olá, Fulano Sinclano</h1>
                <label>{Props.nome}</label>
            </div>
        </Nav>
    )
}