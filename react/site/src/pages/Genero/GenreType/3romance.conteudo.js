import { ContainerGeneros } from "./type.styled"
import ParteCima from "../../../components/Common/parteCima/componente"
import Rodape from "../../../components/Common/rodape/redape"
import { Link } from "react-router-dom"
export default function GenerosRomance() { 
    return (        

        <ContainerGeneros>
            <ParteCima/>
                    <div className="titulo">
                    <div className="quadrado" style={{marginRight: 0.5 + "em"}}></div>
                        <p>ROMANCE <br /><Link to="/genero"><div className="back"><img src="/assets/images/nicoseta.svg" alt=""/>voltar</div></Link></p>
                    <div className="quadrado" style={{marginLeft: 0.5 + "em"}}></div>
                </div>

                <div className="boxes">
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/your name.svg" alt="" />
                        <div className="infobox">
                            <h3>YOUR NAME</h3>
                            <p style={{fontSize: 0.8 + "em", lineHeight: 4 + "em"}}>Makoto Shinkai e Ranmaru Kotone</p>
                            <h2>R$ 99,90</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/as mil partes do meu coração.svg" alt="" />
                        <div className="infobox">
                            <h3 style={{fontSize: 1 + "em"}}>AS MIL PARTES DO MEU CORAÇÃO</h3>
                            <p style={{fontSize:0.8 + "em", lineHeight: 2 + "em"}}>Colleen Hoover</p>
                            <h2>R$ 31,59</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/elite.svg" alt=""/>
                        <div className="infobox">
                            <h3>A ELITE</h3>
                            <p style={{lineHeight: 3.4 + "em"}}>Kiera Cass</p>
                            <h2>R$ 22,90</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/shopping 1 (1).svg" alt="" />
                        <div className="infobox" style={{lineHeight: 2.3 + "em"}}>
                            <h3>TETO PARA DOIS</h3>
                            <p>Beth O’leary</p>
                            <h2>R$ 35,32</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="/assets/images/por do sol no central park.svg"alt="" />
                        <div className="infobox" style={{lineHeight: 1.3 + "em"}}>
                            <h3>PÔR DO SOL NO CENTRAL PARK</h3>
                            <p>Sarah Morgan</p>
                            <h2>R$ 60,59</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="../../assets/images/o caminho paraa liberdade.svg" alt="" />
                        <div className="infobox" style={{lineHeight: 1.3 + "em"}}>
                            <h3>UM CAMINHO PARA A LIBERDADE</h3>
                            <p>Jojo Moyes</p>
                            <h2>R$ 25,50</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="../../assets/images/minha versao.svg" alt="" />
                        <div className="infobox">
                            <h3 style={{fontSize:"small"}}>MINHA VERSÃO DE VOCÊ</h3>
                            <p>Cristina Lauren</p>
                            <h2>R$39,90</h2>
                        </div>
                        </Link>
                    </div>
                    <div className="box">
                        <Link to="/descricao" class="href" style={{color: "white", textDecoration: "none"}}>
                        <img src="../../assets/images/caçadora.svg" alt="" />
                        <div className="infobox" style={{lineHeight: 1.4 + "em"}}>
                            <h3>CAÇADORA DE ESTRELAS</h3>
                            <p>Raiza Varella</p>
                            <h2>R$ 59,90</h2>
                        </div>
                        </Link>
                    </div>
                </div>
            <Rodape />
        </ContainerGeneros>
    )
};