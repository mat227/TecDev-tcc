import { ContainerGenP } from './genp.styled'

export default function GenPConteudo() {
    return (
        <ContainerGenP>
                <div class="titulo">
        <div class="quadrado" style="margin-right: 0.5em;"></div>
            <p>GÊNEROS</p>
        <div class="quadrado" style="margin-left: 0.5em;"></div>
    </div>

    <div class="generos">

        <div className="itens"><link to="../pages/horror.html" class=""><img src="../../assets/images/TERROR.svg" alt=""/></link></div>
        <div className="itens"><link to="../pages/humor.html" class=""><img src="../../assets/images/HUMOR.svg" alt="" /></link></div>
        <div className="itens"><link hyoref="../pages/romance.html" class=""><img src="../../assets/images/ROMANCE.svg" alt=""/></link></div>
        <div className="itens"><link href="../pages/biografia.html" class=""><img src="../../assets/images/BIOGRAFIA.svg" alt=""/></link></div>
        <div className="itens"><link href="../pages/poesia.html" class=""><img src="../../assets/images/POESIA.svg" alt=""/></link></div>

    </div>
        </ContainerGenP>
    )
};