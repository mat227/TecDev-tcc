import { Link } from "react-router-dom";
import ParteCima from "../../components/Common/parteCima/index";
import Rodape from "../../components/Common/rodape/redape";
import { ContainerPag } from "./pag.styled";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import Api from "../../service/apiUsuario";
const api = new Api();

function lerUsuarioLogado(navigation) {
  let logado = Cookie.get("usuario-logado");
  if (logado == null) {
    navigation.push("/");
    return null;
  }
  let usuarioLogado = JSON.parse(logado);
  return usuarioLogado;
 
}


export default function Pagamentos(props) {
  const [livros] = useState(props.location.state);

  const navig = useHistory();
  const usuarioLogado = lerUsuarioLogado(navig) || {};
  //console.log(usuarioLogado);
  const [info] = useState(usuarioLogado);
  console.log(info);

  //zone test
  // const [pedidos] = useState([]);

  const [nrcartao, setNrcartao] = useState("");
  const [titular, setTitular] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [parcelas, setParcelas] = useState("");
  const [cvv, setCvv] = useState("");

  //const [usuario,  setUsuario] = useState([]);

  const [livro, setLivro] = useState([]);

  useEffect(() => {
    carregarCarrinho();
  }, []);

  function carregarCarrinho() {
    let carrinho = Cookie.get("carrinho");
    carrinho = carrinho !== undefined ? JSON.parse(carrinho) : [];
    setLivro(carrinho);
  }
  //console.log(livro);
  
  const finalizarPedido = async () => {
    var data = await api.efetuarpedido(info[0].id_cliente, data1);
    alert(data);
    
  };
  async function cadastrarCartao() {
    let r = await api.cadastrarCartao(
      nrcartao,
      titular,
      sobrenome,
      vencimento,
      parcelas,
      cvv
    );
    if (r.erro) toast.error(`${r.erro}`);
    else {
      finalizarPedido()
      toast.success("✔️ Cartão cadastrado com sucesso!");
    }
    console.log(r);
  }

  const data1 = livro.map((x) => {
    return x;
  });
  //console.log("-------------------");
  //console.log(data1);

  return (
    <ContainerPag>
      <ParteCima />
      <ToastContainer />

      <div className="conteudos">
        <div className="box-texto">
          <div className="titulo">
            <h1>PAGAMENTO</h1>
          </div>
          <div className="caminho">
            <h5>
              SUA SACOLA -
              <u style={{ color: "#00EAFF" }}>PAGAMENTO</u> - FINALIZAÇÃO
            </h5>
          </div>
        </div>
        <div className="box-big">
          <aside>
           
            <div
              className="formas"
              style={{
                width: "94%",
                marginLeft: "0em",
                backgroundColor: "rgba(22, 118, 120, 0.4)",
                paddingLeft: "1em",
                margin: "0",
                height: "4.4em",
              }}
            >
              <img src="/assets/images/cartaocreditocartao.svg" alt="" />
              <Link to="/pagamento">Cartão de Crédito</Link>
            </div>
          </aside>
          <div className="box-info">
            <div className="bandeiras">
              <img src="/assets/images/visa 1formas.svg" alt="" />
              <img
                src="/assets/images/mastercard- 1formas.svg"
                alt=""
                style={{ height: "3.3em" }}
              />
              <img src="/assets/images/elo- 1formas.svg" alt="" />
              <img src="/assets/images/hipercardformas.svg" alt="" />

              <div className="add">
                <img
                  src="assets/images/cartaoadd formas.svg"
                  alt=""
                  style={{ height: "2.3em" }}
                />
              </div>
            </div>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Número do cartão: *</label>
                <br />
                <input
                  value={nrcartao}
                  onChange={(r) => setNrcartao(r.target.value)}
                  type="text"
                  required="required"
                  placeholder="____ ____ ____ ____"
                />
                <br />
                <small>Insira somente números!</small>
              </div>
              <br />
              <div className="form-group1">
                <div>
                  <label for="exampleInputEmail1">
                    Nome do titular do cartão: *
                  </label>
                  <br />
                  <input
                    value={titular}
                    onChange={(r) => setTitular(r.target.value)}
                    type="text"
                    id="left"
                    required="required"
                    placeholder="Ex: Roberto"
                  />
                  <br />
                </div>
                <br />
                <div>
                  <label for="exampleInputEmail1">Sobrenome: *</label>
                  <br />
                  <input
                    value={sobrenome}
                    onChange={(r) => setSobrenome(r.target.value)}
                    type="text"
                    required="required"
                    id="right"
                    placeholder="Ex: Carlos"
                  />
                  <br />
                </div>
              </div>
              <div className="form-group1">
                <div>
                  <label for="exampleInputEmail1">Vencimento: *</label>
                  <br />
                  <input
                    value={vencimento}
                    onChange={(r) => setVencimento(r.target.value)}
                    id="right"
                    required="required"
                    type="date"
                    placeholder="Ex: 05/22"
                  />
                  <br />
                </div>
                <br />
                <div>
                  <label for="exampleInputEmail1">
                    Código de Segurança(CVV): *
                  </label>
                  <br />
                  <input
                  value={cvv}
                  onChange={(r) => setCvv(r.target.value)}
                    type="text"
                    id="right"
                    required="required"
                    placeholder="Ex: 255"
                  />
                  <br />
                  <small>Insira somente números!</small>
                </div>
              </div>
         
            </form>
          </div>
        </div>
        <div className="botoes">
          <Link to="/suaSacola">
            <button
              type="button"
              class="btn btn-default"
              style={{ paddingLeft: 3.8 + "em", paddingRight: 3.8 + "em" }}
            >
              Voltar
            </button>
          </Link>
          <Link to={{pathname:"/compra_realizada", state:livros}}>
          <button onClick={cadastrarCartao} class="btn btn-primary">
            Finalizar pedido
          </button>
          </Link>
        </div>
      </div>
      <Rodape />
    </ContainerPag>
  );
}
