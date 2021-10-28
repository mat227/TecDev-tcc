import { ContainerGeneros } from "./type.styled"
import ParteCima from "../../../components/Common/parteCima/componente"
import Rodape from "../../../components/Common/rodape/redape"
import { Link } from "react-router-dom"
export default function GenerosHumor() { 
    return (        

        <ContainerGeneros>

            <ParteCima/>
                
                <div className="titulo">
                    <div className="quadrado" style={{marginRight: 0.5 + "em"}}></div>
                        <p>HUMOR <br /><Link to="/genero"><div className="back"><img src="/assets/images/nicoseta.svg" alt=""/>voltar</div></Link></p>
                    <div className="quadrado" style={{marginLeft: 0.5 + "em"}}></div>
                </div>

                <div className="boxes">
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/dialogos impossiveis.svg" alt="" />
                        <div className="infobox">
                            <h3>DIÁLOGOS IMPOSSÍVEIS</h3>
                            <p>Luis Fernando Veríssimo</p>
                            <h2>R$ 21,45</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/um pouco de ar.svg" alt="" />
                        <div className="infobox">
                            <h3 style={{lineHeight: 1 + "em", fontSize: 13 + "px"}}>UM POUCO DE AR,<br />POR FAVOR!</h3>
                            <p>George Orwell</p>
                            <h2>R$ 34,90</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/piadas nerd.svg" alt="" />
                        <div className="infobox">
                            <h3 style={{lineHeight: 1 + "em", fontSize: 12 + "px"}}>PIADAS NERDS - AS MELHORES<br />PIADAS DE FÍSICA</h3>
                            <p style={{fontSize: 12 + "px"}}>Luiz Fernando Giolo e Paulo Pourrat</p>
                            <h2>R$ 14,89</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/deu merda!.svg" alt="" />
                        <div className="infobox">
                            <h3>DEU MERDA!</h3>
                            <p>Gabriel Tennysonoux</p>
                            <h2>R$ 23,90</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/voce nunca mais.svg" alt="" />
                        <div className="infobox">
                            <h3>VOCÊ NUNCA MAIS VAI FICAR SOZINHA</h3>
                            <p>Tati Bernardi</p>
                            <h2>R$ 22,90</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/o diario.svg" alt="" />
                        <div className="infobox">
                            <h3>O DIÁRIO DE EDWARD, O HAMSTER: 1990-1990 </h3>
                            <p>MIriam Elia e Ezra Elia</p>
                            <h2>R$ 22,99</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/esculhambação.svg" alt="" />
                        <div className="infobox">
                            <h3>JOSÉ SIMÃO EM A ESCULHAMBAÇÃO</h3>
                            <p>Jose Simão</p>
                            <h2>R$ 9,89</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/mau humor.svg" alt="" />
                        <div className="infobox" style={{lineHeight: 2.5 + "em"}}>
                            <h3>MAU HUMOR</h3>
                            <p>Ruy Castro</p>
                            <h2>R$ 24,57</h2>
                        </div> 
                        </Link>
                    </div>

                </div>
            <Rodape/>
        </ContainerGeneros>
    )
};