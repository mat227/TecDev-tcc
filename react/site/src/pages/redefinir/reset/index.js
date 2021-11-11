
import { useState } from "react"
import Api from '../../../service/apiRedefinir'
import { useHistory } from 'react-router-dom'

const api = new Api();

export default function Reset(props) {
  const [validado, setValidado] = useState(false);
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  const nav = useHistory();

  /// validar codigo
  async function validarCodigo() {
    const r = await api.validarCodig(props.location.state.email, codigo);

    console.log(validarCodigo)

  
    if (r.status === 'ok') {
      setValidado(true);
    } else {
      setValidado(false);
    } 
  }

  async function alterarSenha(){
    const r = await api.resetSenha(props.location.state.email, codigo, novaSenha);
    
    console.log(r)

    if(r.status === 'ok') {
      alert('senha alterada!!!!!!!!!!!!!!!!!!')
      nav.push('/login');
    } else {
      alert(r.mensagem)
    }
  }

  return (
    <div className="oi">
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
};