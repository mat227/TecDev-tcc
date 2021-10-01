import { ContainerEsqueceu } from "./esq.styled";

import ParteCima from "../../components/parteCima/componente";
import Rodape from "../../components/rodape/redape";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


export default function EsqConteudo() { 
    return (        
        <ContainerEsqueceu>
            <ParteCima/>
                        <div className="conteiner">
                            <div className="box-1">
                                <div className="titulo">
                                    <h1>REDEFINIR SENHA</h1>
                                </div>
                                <div className="subtitulo">
                                    <h3>Como gostaria de redefinir sua senha?</h3>
                                </div>
                            </div>
                            <div className="inputs-1">
                                <label style={{fontSize: 1.3 + "em"}}>Insira seu e-mail:</label>
                                    <input type="email"/>
                                    <button type="submit">Enviar código</button>
                            </div>
                            <div className="inputs-2">
                                Ao receber o código, coloque-o aqui:
                                <div className="row"><input type="text" /><input type="text" /><input type="text" /><input type="text" /></div>
                            </div>
                        
                            <div className="box">
                                <link className="button" href="#popup1"><img src="./assets/images/next.svg" alt=""/></link>
                            </div>
                            
                            <div id="popup1" class="overlay">
                                <div className="popup">
                                    <h2>NOVA SENHA</h2>
                                    <link className="close" href="#">&times;</link>
                                    <div className="content">
                                        <input type="password" placeholder="NOVA SENHA"/>
                                        <input type="password" placeholder="CONFIRMAR SENHA"/>
                                        
                                        <button style={{fontFamily: "Rowdies", backgroundColor: "rgba(3, 56, 102, 1)", color: "white", marginTop: 0.8 + 'em', padding: 0.5 + "em", borderRadius: 0 + "px"}}><link to="../Login/login.html" style={{textDecoration: none, color: white}}>LOGIN</link></button>
                                    </div>
                                </div>
                            </div>


                    <div class="logo">
                        <img src="/assets/images/redef.logo atual(1).svg" alt="" />
                    </div>
                </div>
            <Rodape/>
        </ContainerEsqueceu>
    )
};