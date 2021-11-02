import axios from 'axios';
import { useState } from "react";
import { useHistory } from 'react-router-dom';



export default function Reset(props) {
  const [validado, setValidado] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const nav = useHistory();



  async function validarCodigo() {
    const r = await axios.post(`/validarcodigo`, {  email: props.location.state.email, codigo:codigo});
    if (r.data.status === 'ok') {
      setValidado(true);
    } else {
      setValidado(false);
      alert(r.data.mensagem);
    } 
  }


  async function alterarSenha() {
    const r = await axios.put(`https://943zj.sse.codesandbox.io/resetSenha`, { 
      email: props.location.state.email, 
      codigo: codigo,
      novaSenha: novaSenha 
    });

    if (r.data.status === 'ok') {
      alert('Senha alterada!');
      nav.push('/infox/login');
    } else {
      alert(r.data.mensagem);
    }
  }



  return (
    <div className="opa">
        <h1> Recuperação de Senha </h1>
        
        <div>
          Código de Recuperação: <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
        </div>

        <div>
          <button onClick={validarCodigo}> Enviar Código </button>
        </div>


        <br />
        {validado && 
          <div>
            <h3> Altere sua sua senha </h3>

            <div>
              Nova senha: <input type="text" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} />
              <div>
                <button onClick={alterarSenha}> Alterar </button>
              </div>
            </div>
            
          </div>
        }
    </div>
  )
}