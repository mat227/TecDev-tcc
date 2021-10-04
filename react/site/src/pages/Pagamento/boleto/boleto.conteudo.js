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
                    <aside>
                        <div className="formas">
                          <img src="/assets/images/pixpix.svg" alt=""/> Pix
                        </div>
                        <div className="formas" >
                          <img src="/assets/images/cartaocreditocartao.svg" alt=""/> Cartão de Crédito
                        </div>
                        <div className="formas" style={{ width:"94%", marginLeft:"0em", backgroundColor:"rgba(22, 118, 120, 0.4)", paddingLeft:"1em", margin:"0", height:"4.4em"}} >
                          <img src="/assets/images/boleto(1).svg" alt=""/> Boleto Bancário
                        </div>
                    </aside>
                    
                </div>
            <Rodape/>
        </ContainerBoleto>

    );
}