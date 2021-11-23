import { Container } from "./styled";
import ParteCima from "../../components/Common/parteCima/index";
import { Buttom } from "../../components/buttons/indexStyled";
import { Link } from "react-router-dom";
import Rodape from "../../components/Common/rodape/redape";
import { useState } from "react";
import Cookie from "js-cookie";
import { useEffect } from "react";
import CarrinhoItem from './carrinhoitem/item'


export default function SuaSacola() {
  const [livro, setLivro] = useState([]);

  useEffect(carregarCarrinho, []);

  function carregarCarrinho() {
    let carrinho = Cookie.get("carrinho");
    carrinho = carrinho !== undefined ? JSON.parse(carrinho) : [];
    setLivro(carrinho);
  }
 
  function removerProduto(id) {
    let carrinho = livro.filter(item => item.id !== id);
    
    Cookie.set('carrinho', JSON.stringify(carrinho));

    setLivro([...carrinho]);
  }


  function alterarProduto(id, qtd) {
     let produtoAlterado = livro.filter(item => item.id === id)[0];
     produtoAlterado.qtd = qtd;
     Cookie.set('carrinho', JSON.stringify(livro));
  }



   

   

  return (
    <Container>
      <ParteCima />
      <div className="conteudo">
        <div className="titulo">
          <div className="th1">
            <h1>Sua Sacola</h1>
          </div>
          <div class="trilhaM">
            <label style={{ color: "#00EAFF" }}>SUA SACOLA </label> -{" "} <label>PAGAMENTO - </label>{" "}
            <label> FINALIZAÇÃO</label>
          </div>
        </div>
        <div className="container-cont">
          <div className="itens">
            <div className="tabela">
              
            {livro.map((item) => (
              
                    <CarrinhoItem key={item.id_livro} 
                    info={item} 
                    onUpdate={alterarProduto} 
                    onRemove={removerProduto} />
                  ))}
            
                     
            </div>
          </div>
          <div className="cupom">
            <div className="quadb">
              <Buttom className="btnf">
                <Link to={{pathname:"/pagamento" , state:livro}}>Proximo passo</Link>
              </Buttom>
              <Buttom className="btnf">
                <Link to="/homepage">Continuar Comprando</Link>
              </Buttom>
            </div>
          </div>
        </div>
      </div>
      <Rodape />
    </Container>
  );
}
