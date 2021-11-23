import { ContainerRodape } from "./styled"

export default function Rodape() {
    return (
        <ContainerRodape>
            <div className="roda-mae">
                <div className="logo-g">
                    <div className="logo">
                        <img src="/assets/images/nice library png 1.svg" alt=""/>
                        <img class="hp1-nome" src="/assets/images/Bookly.svg" alt=""/>
                    </div>
                     <div className="ro-logonm">by: TecDev</div>
                </div>

                <div className="redes-sociais">
                    <div className="redes">
                        <img src="/assets/images/insta.svg"/>
                        <img src="/assets/images/facebook.svg"/>
                    </div>
                </div>
            </div>
        </ContainerRodape>
    )
}