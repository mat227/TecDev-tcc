import ParteCima from "../../components/Common/parteCima/componente";
import Rodape from "../../components/Common/rodape/redape";

import { ContainerPedido } from "./pedi.styled";

export default function SeusPedidos() {
    return (   
        <ContainerPedido>
            <ParteCima/>
            <div className="conteudo">
                <div className="titulo"><h1>SEUS PEDIDOS</h1></div>
                <div className="box">
                    <div className="item">
                        <div className="livro"><img src="/assets/images/o que o sol faz com as florescomprar.svg" alt=""/></div>
                        <div className="descricao">O QUE O SOL FAZ COM AS FLORES</div>
                        <div className="menu">
                            <div className="menu-item">
                                <div className="imagem"><img src="/assets/images/caminhaoicone.svg" alt="" style={{marginLeft: 0.3 + "em"}}/></div>
                                <div className="descricao">Transportadora<br/><div style={{fontSize: 0.8 + "em", color:"#6ECAEF"}}>28/08/2021 10:15:23</div></div>
                            </div>
                            <div className="quadrado" style={{marginLeft: -2 + "em", width: 5 + "em",marginRight: -2 + "em"}}></div>
                            <div className="menu-item">
                                <div className="imagem"><img src="/assets/images/transferencia.svg" alt="" style={{marginLeft: 0.3 + "em"}}/></div>
                                <div className="descricao" style={{fontSize: 0.9 + "em", lineHeight:1.3+"em"}}>Em Transferência<br/><div style={{fontSize: 0.9 + "em", color:"#6ECAEF"}}>28/08/2021 12:51:36</div></div>
                            </div>
                            <div className="quadrado" style={{marginLeft: -2 + "em", width: 5 + "em",marginRight: -2 + "em"}}></div>
                            <div className="menu-item">
                                <div className="imagem"><img src="/assets/images/pedidorecebido.svg" alt="" style={{marginLeft: 0.3 + "em"}}/></div>
                                <div className="descricao">Pedido Recebido<br/><div style={{fontSize: 0.8 + "em", color:"#6ECAEF"}}>Aguardando...</div></div>
                            </div>
                            <div className="quadrado" style={{marginLeft: -2 + "em", width: 5 + "em",marginRight: -2 + "em"}}></div>
                            <div className="menu-item">
                                <div className="imagem"><img src="/assets/images/saiupraentrega.svg" alt="" style={{marginLeft: 0.3 + "em"}}/></div>
                                <div className="descricao" style={{fontSize: 0.9 + "em", lineHeight:1.3+"em"}}>Saiu para Entrega<br/><div style={{fontSize: 0.9 + "em", color:"#6ECAEF"}}>Aguardando...</div></div>
                            </div>
                            <div className="quadrado" style={{marginLeft: -2 + "em", width: 5 + "em",marginRight: -2 + "em"}}></div>
                            <div className="menu-item">
                                <div className="imagem"><img src="/assets/images/entregaconcluida.svg" alt="" style={{marginLeft: 0.3 + "em"}}/></div>
                                <div className="descricao"  style={{fontSize: 0.9 + "em", lineHeight:1.3+"em"}}>Entrega Concluída<br/><div style={{fontSize: 0.9 + "em", color:"#6ECAEF"}}>Aguardando...</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape/>
        </ContainerPedido>
     );
}