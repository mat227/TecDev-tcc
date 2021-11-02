import axios from 'axios';
import { useState } from "react";
import {useHistory}  from "react-router-dom";

export default function Recuperacao() { 
    // const [email, setEmail] = useState('');
    // const nav = useHistory();

    // async function recuperar() {
    //     const r = await axios.post(`/redefinir`, {email:email});
    //     if (r.data.status === 'ok') {
    //         nav.push('/redefinir/reset', {email: email});
    //     } else {
    //         alert(r.data.mensagem);
    //     }
    // }


    return (        
        <div className="redef-nico">
            <h1>recuperação de senha</h1>
            <div>
                email: <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <button onClick={recuperar}>enviar codigo</button>
        </div>
    )
};