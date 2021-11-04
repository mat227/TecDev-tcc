import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled";

export default function Livros(props) {
  const [livro, setLivro] = useState(props.info);

  return (
    <Container>
      <div class="livros-queridinhas">
        <Link to={{ pathname: "/descricao", state: livro }}>
          <div class="box-livro">
            <div class="img-livro-queridinha">
              <img src={livro.ds_imagen} alt="" />
            </div>
            <div class="box-informacoes-livros">
              <div class="nome-livro-queridinhas">{livro.nm_livro}</div>
              <div class="autor-queridinhas">{livro.ds_autora}</div>
              <div class="preco-queridinhas">{livro.vl_para}</div>
            </div>
          </div>
        </Link>
      </div>
    </Container>
  );
}
