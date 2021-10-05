import { ContainerGeneros } from "./type.styled"
import ParteCima from "../../../components/Common/parteCima/componente"
import Rodape from "../../../components/Common/rodape/redape"
import { Link } from "react-router-dom"
export default function GenerosPoesia() { 
    return (        
        <ContainerGeneros>
            <ParteCima/>
            <div className="titulo">
            <div className="quadrado" style={{marginRight: 0.5+ "em"}}></div>
                <p>POESIA</p>
            <div className="quadrado" style={{marginLeft: 0.5 + "em"}}></div>
        </div>

        <div className="boxes">
            <div className="box">
                <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/Balada da estrela e outros poemas.svg" alt="" />
                <div className="infobox">
                    <h3 style={{fontSize: 1 + "em"}}>BALADA DA ESTRELA E OUTROS POEMAS</h3>
                    <p>Gabriela Mistral</p>
                    <h2>R$ 46,47</h2>
                </div>
                </Link>
            </div>
            <div className="box">
                <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/poesia com rapadura.svg" alt=""/>
                <div className="infobox" style={{lineHeight: 2.3 + "em"}}>
                    <h3>POESIA COM RAPADURA</h3>
                    <p>Braulio Bessa</p>
                    <h2>R$ 27,97</h2>
                </div>
                </Link>
            </div>
            <div className="box">
                <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}> 
                <img src="/assets/images/outros jeitos de usar a boca.svg" alt=""/>
                <div className="infobox">
                    <h3>OUTROS JEITOS DE USAR A BOCA</h3>
                    <p>Rupi Kaur</p>
                    <h2>R$ 19,90</h2>
                </div>
                </Link>
            </div>
            <div className="box">
                <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/VOCÊ FICA TÃO SOZINHO ÀS VEZES QIE ATÉ FAZ SENTIDO.svg" alt="" />
                <div className="infobox">
                    <h3 style={{fontSize: 1+ "em"}}>VOCÊ FICA TÃO SOZINHO ÀS VEZES QUE ATÉ FAZ SENTIDO</h3>
                    <p>Charles Bukowski</p>
                    <h2>R$ 38,89</h2>
                </div>
                </Link>
            </div>
            <div className="box">
                <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/O DIA EM QUE A POESIA DERROTOU UM DITADOR.svg" alt="" />
                <div className="infobox">
                    <h3 style={{fontSize: 0.9 + "em"}}>O Dia Em Que a Poesia Derrotou um Ditador</h3>
                    <p>Antonio Skármeta</p>
                    <h2>R$ 59,90</h2>
                </div>
                </Link>
            </div>
            <div className="box">
                <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/O MENINO QUE VIROU CHUVA.svg" alt="" />
                <div className="infobox">
                    <h3 style={{fontSize: 1+ "em"}}>O MENINO QUE VIROU CHUVA</h3>
                    <p>Yuri de Francco e Renato Moriconi</p>
                    <h2>R$ 40,48</h2>
                </div>
                </Link>
            </div>
            <div className="box">
                <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="/assets/images/QUEM SOU EU, AFINAL_.svg"alt="" />
                <div className="infobox" style={{lineHeight: 2.4 + "em"}}>
                    <h3>QUEM SOU EU AFINAL?</h3>
                    <p>Ricardo Valverde</p>
                    <h2>R$39,90</h2>
                </div>
                </Link>
            </div>
            <div className="box">
                <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                <img src="../../assets/images/A PARTE QUE FAZ FALTA.svg" alt="" />
                <div className="infobox" style={{lineHeight: 2.4+ "em"}}>
                    <h3>A PARTE QUE FALTA</h3>
                    <p>Shel Silverstein</p>
                    <h2>R$ 37,90</h2>
                </div>
                </Link>
            </div>
        </div>

            <Rodape />
        </ContainerGeneros>
    )
};