// import { useState } from "react";
// import Api from "../../service/api";
import { ContainerEsqueceu } from "./esq.styled";

// import { Popup } from './esq.styled';
// import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css 

export default function EsqConteudo() { 
//   const api = new Api();

//     const [email, setEmail]= useState('');
//     const [codigo, setCodigo]= useState();

//     const InserirEmail = async () =>{
//         let r = await api.esquecisenha(email);
//         if (r.erro) {
//             alert('deu ruim')
//         } else {
//             alert('deu bom')
//         }
//     }

//     const Codigo = async() => {
        
//     }  


    return (        

        <ContainerEsqueceu>
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
                                <input type="email" />
                                <button type="submit">Enviar código</button>
                        </div>
                        <div className="inputs-2">
                            Ao receber o código, coloque-o aqui:
                            <div className="row"><input type="text" /><input type="text" /><input type="text" /><input type="text" /></div>
                        </div>
                    
                        <div className="logo">
                            <img src="/assets/images/redef.logo atual(1).svg" alt =""/>
                        </div>
                    </div>
        </ContainerEsqueceu>
    )
};