
import { useState } from "react"
import Api from '../../../service/apiLogin'


const api = new Api();

export default function Reset(props) {
  const [validado, setValidado] = useState(false);
  const [codigo, setCodigo] = useState('');


  /// validar codigo
  async function validarCodigo() {
    const r = await api.validarCodig({
       email: props.location.state.email,
       codigo: codigo
    });
  
    if (r.status === 'ok') {
      console.log('passou pelo if')
      setValidado(true);
      alert('validado true');
    } else {
      console.log('inicio else')
      setValidado(false);
      
      alert('validado false');
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
                Nova senha: <input type="text" />
                <div>
                  <button> Alterar </button>
                </div>
              </div>
              
            </div>
          }
    </div>
  )
};