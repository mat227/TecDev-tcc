import { ContainerCadastro } from "./cadas.styled"
import { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

import Api from '../../service/apiLogin'


const api = new Api();


export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [datanas, setDatanas] = useState("");
  const [nomerua, setNomerua] = useState("");
  const [cep, setCep] = useState("");
  const [numerocasa, setNumerocasa] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const navig = useHistory();


    async function cadastroCliente() {    
          let r = await api.cadastro(
            email,
            senha,
            telefone,
            nome,
            cpf,
            datanas,
            nomerua,
            cep,
            numerocasa,
            bairro,
            complemento      
          );
    
          if (r.erro) toast.error(`${r.erro}`);

          else {
            toast.success("✔️ Cadastro feito com sucesso!");
            navig.push('/login');

          }
          console.log(r)
        }
    
       
      
    
    return (
        <ContainerCadastro>
      <ToastContainer />

                    <div class="Conteiner-cadastrar">

            <div class="box1">
                <div class="titulo">Cadastro</div>
                <div class="img-logo"><img src="/assets/images/logo-cadas.svg"  alt=""/></div>

            </div>
            <div class="inputs-criar">
                <div class="cadastrar">

                    <div class="Nome_cadastrar">Nome</div>
                    <div class="cadastrar-sn">
                        <input 
                        value={nome}
                        onChange={(r) => setNome(r.target.value)}
                        id="nome_cadastrar" name="nome_cadastrar" required="required" type="text" />
                    </div>
                  
                    <div class="cpf_cadastrar">C.P.F</div>
                    <div class="cadastrar-sn">
                        <input 
                         value={cpf}
                         onChange={(r) => setCpf(r.target.value)}
                        id="cpf_cadastrar" name="cpf_cadastrar" required="required" type="text" placeholder="000.000.000-00"/>
                    </div>
                    <div class="email_cadastrar">E-mail</div>
                    <div class="cadastrar-sn">
                        <input 
                         value={email}
                         onChange={(r) => setEmail(r.target.value)}
                        id="email_cadastrar" type="email" name="email_cadastrar" required="required"  />
                    </div>

                    <div class="senha_cadastrar">Senha</div>
                    <div class="cadastrar-sn">
                        <input 
                         value={senha}
                         onChange={(r) => setSenha(r.target.value)}
                        id="senha_cadastrar" name="senha_cadastrar" required="required" type="password" />
                    </div>
                   
                    <div class="data_cadastrar">Data de nascimento</div>
                    <div class="cadastrar-sn">
                        <input
                         value={datanas}
                         onChange={(r) => setDatanas(r.target.value)}
                        id="data_cadastrar" name="data_cadastrar" type="date" required="required"  />
                    </div>
                    <div class="data_cadastrar">Telefone</div>
                    <div class="cadastrar-sn">
                        <input value={telefone}
                        onChange={(r) => setTelefone(r.target.value)}
                        id="telefone" name="telefone"  required="required"  />
                    </div>
                    <div class="data_cadastrar">CEP</div>
                    <div class="cadastrar-sn">
                        <input  value={cep}
                         onChange={(r) => setCep(r.target.value)}
                         id="rua" name="rua" type="text" required="required"  />
                    </div>
                    <div class="data_cadastrar">Endereço</div>
                    <div class="cadastrar-sn">
                        <input  value={nomerua}
                         onChange={(r) => setNomerua(r.target.value)}
                         id="rua" name="rua" type="text" required="required"  />
                    </div>
                    <div class="data_cadastrar">Número</div>
                    <div class="cadastrar-sn">
                        <input  value={numerocasa}
                         onChange={(r) => setNumerocasa(r.target.value)}
                         id="numero" name="numero" type="text" required="required"  />
                    </div>
                    <div class="data_cadastrar">Complemento</div>
                    <div class="cadastrar-sn">
                        <input 
                         value={complemento}
                         onChange={(r) => setComplemento(r.target.value)}
                        id="cl_casa" name="cl_casa"  required="required"  />
                    </div>
                    <div class="data_cadastrar">Bairro</div>
                    <div class="cadastrar-sn">
                        <input 
                         value={bairro}
                         onChange={(r) => setBairro(r.target.value)}
                        id="br_casa" name="br_casa"  required="required"  />
                    </div>
                    

                    <div class="pt-baixo">
                        
                        <div class="vincular-conta">
                            <img src="/assets/images/facebook-cadas.svg" alt="" />
                        </div>
                        <div class="vincular-conta">
                            <img src="/assets/images/google.svg" alt="" />
                        </div>
                
                        <div class="botao"><button onClick={cadastroCliente}>Cadastrar</button></div>
                    </div>
                </div>
                

                </div>

            </div>


        </ContainerCadastro>




    )

}

