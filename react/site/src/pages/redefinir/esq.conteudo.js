import { useState } from "react";
import { ContainerEsqueceu } from "./esq.styled";

import { useHistory } from "react-router";
import Api from '../../service/apiLogin';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const api = new Api();





export default function EsqConteudo() { 

    const [email, setEmail] = useState('');

    const nav = useHistory();

    const recuperar = async () => {
        
        const r = await api.recuperar(email);
        if (r.status === 'ok') {
            nav.push('/reset', {email: email});
        } else {
            toast.dark(r.mensagem);
        }

    }
    return (        
        <ContainerEsqueceu>
            <ToastContainer />
                
                        
                        <div className="box-1">
                            <div className="titulo">
                                <h1>REDEFINIR SENHA</h1>
                            </div>
                        </div>
                        <div className="inputs-1">
                            <label style={{fontSize: 1.3 + "em"}}>Insira seu e-mail:</label>
                                   <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                <button type="submit" onClick={recuperar}>Enviar código</button>
                        </div>


                        <div className="esq-logo">
                            <img src="/assets/images/nice library png 1.svg" alt="" />
                            <img src="/assets/images/bookly.svg" alt="" />
                        </div>
                        

                    
        </ContainerEsqueceu>
    )
};