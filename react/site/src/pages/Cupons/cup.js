import { ConteinerCupom } from "./styled";
import ParteCima from "../../components/Common/parteCima/index";
import Rodape from "../../components/Common/rodape/redape";

export default function Cupons() {
  return (
    <ConteinerCupom>
      <ParteCima />
      <div class="cup-container">
        <div class="conteiner">
          <div class="titulo">
            <div class="quadrado" style={{ marginRight: "0.5em" }}></div>
            <p>Cupons</p>
            <div class="quadrado" style={{ marginRight: "0.5em" }}></div>
          </div>

          <div class="box-mae">
            <div class="selecao-livro">
              <div class="box-livros">
                <div class="imgt">
                  <div class="imgl">
                    <img
                      src="/assets/images/kit_de_livro-removebg-preview 1.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div class="box-precos">
                  <div class="precos">
                    <div class="por">20% de Desconto</div>
                    <div class="por1">
                      Copie e cole o código no campo "cupom de desconto" no
                      carrinho.{" "}
                    </div>
                    <div class="por2">Regras do cupom</div>
                    <div class="botao-preco">
                      <button>TRONO20</button>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <Rodape />
    </ConteinerCupom>
  );
}
