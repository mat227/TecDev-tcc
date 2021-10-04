import ParteCima from "../../../components/Common/parteCima/componente";
import Rodape from "../../../components/Common/rodape/redape";
import { Bottom } from "../../../components/buttons/indexStyled";
import { Link } from "react-router-dom";

import { ContainerPix } from "./pix.styled";

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
          <div className="botoespix">
         <Link to="/info">  <div className="bt1"> <Bottom>Voltar</Bottom></div></Link>
           <div className="bt2"> <Bottom>Próximo passo</Bottom></div>

        </div>
        </div>
      
      </div>
      <Rodape />
    </ContainerPix>
  );
}
