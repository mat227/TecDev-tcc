import { Nav}  from './navStyled.js';

export default function Cabecalho(){
    return(
        <Nav>
            <div class="imgP">
                <img src="./assets/imagens/relampago.jfif" alt ='' />
                <div class="alt_img">Alterar imagem</div>
            </div>
            <div class="nomeP">
                <h1>Olá, Fulano Sinclano</h1>
                <label>Usuario</label>
            </div>
        </Nav>
    )
}