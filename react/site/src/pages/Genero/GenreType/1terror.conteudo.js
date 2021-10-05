import ParteCima from "../../../components/Common/parteCima/componente"
import { ContainerGeneros } from "./type.styled"
import Rodape from "../../../components/Common/rodape/redape"
import { Link } from "react-router-dom"

export default function GenerosTerror() { 
    return (        

        <ContainerGeneros>
           <div className="conteiner">
                <ParteCima />
                <div className="titulo">
                    <div className="quadrado" style={{marginRight: 0.5 + "em"}}></div>
                        <p>TERROR</p>
                    <div className="quadrado" style={{marginLeft: 0.5 + "em"}}></div>
                </div>

                <div className="boxes">
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/frankenstein.svg" alt="" />
                        <div className="infobox">
                            <h3>FRANKENSTEIN</h3>
                            <p>Mary Shelley</p>
                            <h2>R$ 24,90</h2>
                        </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/dracula.svg" alt="" />
                        <div className="infobox">
                            <h3>DRÁCULA</h3>
                            <p>Bram Stoker</p>
                            <h2>R$ 34,90</h2>
                        </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/it a coisa.svg"alt="" />
                        <div className="infobox">
                            <h3>IT - A COISA</h3>
                            <p>Stephen King</p>
                            <h2>R$ 92,90</h2>
                        </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/asylumoo.svg" alt="" />
                        <div className="infobox">
                            <h3>ASYLUM</h3>
                            <p>Madeleine Roux</p>
                            <h2>R$ 38,17</h2>
                        </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/exorcistaa-removebg-preview 1.svg" alt="" />
                        <div className="infobox">
                            <h3>EXORCISTA</h3>
                            <p>William Peter Blatty</p>
                            <h2>R$ 59,90</h2>
                        </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/o coração revelador (1).svg" alt=""/>
                        <div className="infobox">
                            <h3>O CORAÇÃO REVELADOR</h3>
                            <p>Edgar Allan Poe</p>
                            <h2>R$ 59,90</h2>
                        </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/sub-removebg-preview 1.svg" alt="" />
                        <div className="infobox">
                            <h3 style={{fontSize:"small"}}>A MENINA SUBMERSA - MEMÓRIAS</h3>
                            <p>Caitlín R. Kiernan</p>
                            <h2>R$39,90</h2>
                        </div>
                        </Link>
                    </div>

                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/saasa-removebg-preview 1.svg" alt=""/>
                        <div className="infobox">
                            <h3>OUTSIDER</h3>
                            <p>Stephen King</p>
                            <h2>R$ 59,90</h2>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>      
            <Rodape />
        </ContainerGeneros>
    )
};