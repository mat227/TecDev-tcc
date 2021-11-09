import ParteCima from "../../../components/Common/parteCima/componente";
import { ContainerGeneros } from "./type.styled";
import Rodape from "../../../components/Common/rodape/redape";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../../service/apiLivro";
const api = new Api();
export default function GenerosTerror() {
  const [livro, setLivro] = useState([]);

  async function listar() {
    let a = await api.livroromance();
    setLivro(a);
    console.log(a);
  }

  useEffect(() => {
    listar();
  }, []);
  return (
    <ContainerGeneros>
      <div className="conteiner">
        <ParteCima />
        <div className="titulo">
          <div className="quadrado" style={{ marginRight: 0.5 + "em" }}></div>
          <p>
            Romance <br />
            <Link to="/genero">
              <div className="back">
                <img src="/assets/images/nicoseta.svg" alt="" />
                voltar
              </div>
            </Link>
          </p>

          <div className="quadrado" style={{ marginLeft: 0.5 + "em" }}></div>
        </div>

        <div className="boxes">
          {livro.map((item) => (
            <Link to={{ pathname: "/descricao", state: item }}>
              <div class="box-livro">
                <div class="img-livro-queridinha">
                  <img
                    src={item.ds_imagen}
                    alt=""
                    style={{ height: "190px", width: "185px" }}
                  />
                </div>
                <div class="box-informacoes-livros">
                  <div class="nome-livro-desconto">{item.nm_livro}</div>
                  <div class="autor-desconto">{item.ds_autora}</div>
                  <div class="preco-descontotr">R$ {item.vl_de}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Rodape />
    </ContainerGeneros>
  );
}
