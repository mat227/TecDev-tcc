import { Link } from "react-router-dom";
import ParteCima from "../../../components/Common/parteCima/componente";
import Rodape from "../../../components/Common/rodape/redape";
import { ContainerBoleto } from "./boleto.styled";

export default function Pagamentos() {
    return (
        <ContainerBoleto>
            <ParteCima/>
            <div className="conteudos">
                    <div className="box-texto">
                        <div className="titulo"><h1>PAGAMENTO</h1></div>
                        <div className="caminho"><h5>SUA SACOLA - SUAS INFORMAÇÕES - <u style={{color:"#00EAFF"}}>PAGAMENTO</u> - FINALIZAÇÃO</h5></div>
                    </div>
                    <div className="conteudo2">
          <aside>
         

           <div className="formas">
                            <img src="/assets/images/pixpix.svg" alt=""/>  <Link to="/pagamento_pix"> Pix  </Link>
            </div>
          <Link to="/pagamento">  <div className="formas">
              <img src="/assets/images/cartaocreditocartao.svg" alt="" /> Cartão
              de Crédito
            </div>
            </Link>
          <div className="formas">
              <img src="/assets/images/boleto(1).svg" alt="" /> Boleto Bancário
            </div>
          </aside>

          <div className="info-pagamento">
            <div className="tlpagamento">Boleto bancário gerado!</div>
           <div className="pt1">
           <div className="botoes"><button>Clique aqui para fazer o dowload do boleto<img src="/assets/images/Groupdow.svg" alt=""/></button></div>
            <div className="img-boleto">
              <img
                src="/assets/images/boleto-removebg-preview 1.svg"
                alt=""
              />
              </div>
            </div>
            <div className="botoes">
         <button type="button"   class="btn btn-default" style={{paddingLeft: 3.8 + "em", paddingRight: 3.8 + "em"}}>Visualizar boleto</button>
                     <button type="submit" class="btn btn-primary">Confirmar</button>
            </div>
            <div className="tldescricao">
            *Após  a confirmação da compra você terá
2 dias para efetuar o pagamento desse  boleto.*
            </div>
          </div>
         

        </div>
        <div className="botoes2">
                        <Link to="/suasacola"><button type="button"   class="btn btn-default" style={{paddingLeft: 3.8 + "em", paddingRight: 3.8 + "em"}}>Voltar</button></Link>
                        <Link to="/compra_realizada"><button type="submit" class="btn btn-primary">Próximo passo</button></Link>
                    </div>
      </div>
            <Rodape/>
        </ContainerBoleto>

    );
}