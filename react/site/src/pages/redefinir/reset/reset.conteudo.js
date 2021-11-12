import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContainerReset } from './reset.styled';
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
      toast.dark(r.mensagem)
    }
  }

  return (
    <ContainerReset>
        <ToastContainer/>
    
        <div className="box-1">
          <div className="titulo">
              <h1>CÓDIGO</h1>
          </div>
        </div>
        

        <div className="inputs-1">
          <label style={{fontSize: 1.3 + "em"}}>Código de Recuperação</label>
          <input type="text" value={codigo} onChange={e => setCodigo(e.target.value)} />
          
          <button type="submit" onClick={validarCodigo}> Enviar Código</button>
        </div>

        
          <div className="esq-logo" style={{ marginTop: 15 + "em"}}>
            <img src="/assets/images/nice library png 1.svg" alt="" />
            <img src="/assets/images/bookly.svg" alt="" />
          </div>

          <br />
          {validado && 

            <div className="inputs-2">
              <label style={{fontSize: 1.3 + "em"}}>Alterar a sua Senha</label>
              <input type="text" value={novaSenha} onChange={e => setNovaSenha(e.target.value)} />
              
              <button type="submit" onClick={alterarSenha}>Alterar</button>
            </div>


            
          }






    </ContainerReset>
  )
};