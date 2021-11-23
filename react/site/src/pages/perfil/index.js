import { Container } from "./indexSyled.js";
//import Nav from '../../components/Common/cabecalhoperfil/nav.js';
import { ContainerPartecima } from "../../components/Common/parteCima/styled.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import Rodape from "../../components/Common/rodape/redape.js";
import ParteCima from "../../components/Common/parteCima/index";

function lerUsuarioLogado(navigation) {
  let logado = Cookies.get("usuario-logado");
  if (logado == null) {
    navigation.push("/");
    return null;
  }
  let usuarioLogado = JSON.parse(logado);
  return usuarioLogado;
}

export default function Login() {
  const [alt, setALt] = useState(0);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [danasc, setData] = useState("");
  const [cpf, setCpf] = useState("");
  const [numero, setNumero] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const nav = useHistory();

  const usuarioLogado = lerUsuarioLogado(nav) || {};
  console.log(usuarioLogado);
  const [info] = useState(JSON.parse(Cookies.get("usuario-logado")));
  console.log(info);

  const altInfo = async () => {
    console.log("chegamos aqui");
    setALt(0);
  };

 
  return (
    <div>
      <ParteCima />
      <Container>
        <ContainerPartecima />
        <div class="faixaUm">
          <div class="colunas especial">
            <Link to="/suas_infomacoes">
              <label>Suas informações</label>
            </Link>
          </div>
          <div class="colunas">
            <Link to="/favoritos">
              <label>Seus favoritos</label>
            </Link>
          </div>
          <div class="colunas">
            <Link to="/suasacola">
              <label>Sua sacola</label>
            </Link>
          </div>
          <div class="colunas">
            <Link to="/seus_pedidos">
              <label>Seus pedidos</label>
            </Link>
          </div>
        </div>
        <div class="faixaDois">
          <div class="aux2">
            <div class="titulo">
              <h1>Suas informações</h1>
              <div class="btn">
                <div class="btnE">
                  <button onClick={() => setALt(info.id_cliente)}>
                    Editar <br />
                    informações
                  </button>
                </div>
              </div>
              <Link to="/login">
                <button className="btadm">Sair</button>
              </Link>
            </div>
            <div class="labels">
              {alt === 0 ? (
                <label class="test">Nome: {info[0].nm_cliente}</label>
              ) : (
                <input
                  class="test1"
                  type="text"
                  placeholder="informe seu nome"
                  defaultValue={nome}
                  onchange={(e) => setNome(e.target.value)}
                />
              )}
              {alt === 0 ? (
                <label class="test">Email: {info[0].ds_email}</label>
              ) : (
                <input
                  class="test1"
                  type="text"
                  placeholder="informe seu Email"
                  defaultValue={email}
                  onchange={(e) => setEmail(e.target.value)}
                />
              )}
              {alt === 0 ? (
                <label class="test" for="">
                  Data de nascimento: {info[0].dt_nascimento.substring(0,10)}
                </label>
              ) : (
                <input
                  class="test1"
                  type="date"
                  placeholder="informe sua data de nascimento"
                  defaultValue={danasc}
                  onchange={(e) => setData(e.target.value)}
                />
              )}
              {alt === 0 ? (
                <label class="test" for="">
                  CPF: {info[0].ds_cpf}
                </label>
              ) : (
                <input
                  class="test1"
                  type="text"
                  placeholder="informe seu cpf"
                  defaultValue={cpf}
                  onchange={(e) => setCpf(e.target.value)}
                />
              )}
              {alt === 0 ? (
                <label class="test" for="">
                  Endereço : {info[0].nm_rua}
                </label>
              ) : (
                <input
                  class="test1"
                  type="text"
                  placeholder="informe sua rua"
                  defaultValue={rua}
                  onchange={(e) => setRua(e.target.value)}
                />
              )}
              {alt === 0 ? (
                <label class="test" for="">
                  Complemento : {info[0].ds_complemento}
                </label>
              ) : (
                <input
                  class="test1"
                  type="text"
                  placeholder="informe o complemento"
                  defaultValue={complemento}
                  onchange={(e) => setComplemento(e.target.value)}
                />
              )}
              {alt === 0 ? (
                <label class="test" for="">
                  Bairro: {info[0].ds_bairro}
                </label>
              ) : (
                <input
                  class="test1"
                  type="text"
                  placeholder="informe seu bairro"
                  defaultValue={bairro}
                  onchange={(e) => setBairro(e.target.value)}
                />
              )}
            </div>
            <div class="contato">
              <h2>Telefone</h2>
              {alt === 0 ? (
                <label for="" class="tell">
                  {info[0].nr_contato}
                </label>
              ) : (
                <input
                  class="test1"
                  type="text"
                  placeholder="informe seu numero"
                  defaultValue={numero}
                  onchange={(e) => setNumero(e.target.value)}
                />
              )}
              {alt === 0 ? (
                " "
              ) : (
                <button onClick={() => altInfo()}> enviar </button>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Rodape />
    </div>
  );
}
