import axios from 'axios';
import { useState } from "react";
import { ContainerEsqueceu } from "./esq.styled";

import { useHistory } from "react-router";
import Api from '../../service/api';

const api = new Api();





export default function EsqConteudo() { 

    const [email, setEmail] = useState('');

    const nav = useHistory();

    async function recuperar() {
        let x = await api.recuperar()
        if ( x === 'ok') {
            nav.push('/reset');
        }
        return;
    }
    return (        

        <ContainerEsqueceu>
                    <div className="conteiner">
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

                    
                        <div className="logo">
                            <img src="/assets/images/redef.logo atual(1).svg" alt =""/>
                        </div>
                    </div>
        </ContainerEsqueceu>
    )
};