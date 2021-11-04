import ParteCima from "../../../components/Common/parteCima/componente";
import Rodape from "../../../components/Common/rodape/redape";

import { ContainerPix } from "./pix.styled";
import { Link } from "react-router-dom";

export default function Pagamentos() {
  return (
    <ContainerPix>
      <ParteCima />
      <div className="conteudos">
        <div className="box-texto">
          <div className="titulo">
            <h1>PAGAMENTO</h1>
          </div>
          <div className="caminho">
            <h5>
              SUA SACOLA - SUAS INFORMAÇÕES -{" "}
              <u style={{ color: "#00EAFF" }}>PAGAMENTO</u> - FINALIZAÇÃO
            </h5>
          </div>
        </div>
        <div className="conteudo2">
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
              <img src="/assets/images/pixpix.svg" alt="" /> Pix
            </div>
          <Link to="/pagamento">  <div className="formas">
              <img src="/assets/images/cartaocreditocartao.svg" alt="" /> Cartão
              de Crédito
            </div>
            </Link>
          <Link to="/pagamento_boleto">  <div className="formas">
              <img src="/assets/images/boleto(1).svg" alt="" /> Boleto Bancário
            </div>
            </Link>
          </aside>

          <div className="info-pagamento">
            <div className="tlpagamento">QR Code gerado com sucesso!</div>
            <div className="img-qrcode">
              <img
                src="/assets/images/kisspng-barcode-qr-code-data-matrix-international-article-qr-codes-5adac52b7c68d1 1.svg"
                alt=""
              />
            </div>
            <div className="tldescricao">
              A partir da geração desse QR Code você tem 30 minutos para
              realizar o pagamento, caso o tempo esgote a compra será cancelada!
            </div>
          </div>
        
        </div>
        <div className="botoes">
              <a href="/suasacola"><button type="button"   class="btn btn-default" style={{paddingLeft: 3.8 + "em", paddingRight: 3.8 + "em"}}>Voltar</button></a>
              <a href="/compra_realizada"><button type="submit" class="btn btn-primary">Próximo passo</button></a>
            </div>
      </div>
      <Rodape />
    </ContainerPix>
  );
}
