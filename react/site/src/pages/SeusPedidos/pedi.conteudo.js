import ParteCima from "../../components/Common/parteCima/index";
import Rodape from "../../components/Common/rodape/redape";
import { ContainerPedido } from "./pedi.styled";
import Api from '../../service/apiUsuario';
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router";

const api = new Api();
function lerUsuarioLogado(navigation) {
    let logado = Cookies.get("usuario-logado");
    if (logado == null) {
      navigation.push("/");
      return null;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado;
  }
  

export default function SeusPedidos() {
    useEffect(()=>{
        pedido();
    },[ ])
    

    const nav = useHistory();

    const usuarioLogado = lerUsuarioLogado(nav) || {};
    const [info] = useState(JSON.parse(Cookies.get("usuario-logado")));
    //console.log(info);
    let id = info[0].id_cliente;
   
    const [pedidos , setPedidos] = useState();
  
    const pedido = async () => {
        
        let data =  await api.pedidos(id);
        setPedidos(data);
        console.log(data);
    }
    return (   
        <ContainerPedido>
            <ParteCima/>
            <div className="conteudo">
                <div className="titulo"><h1>SEUS PEDIDOS</h1></div>
                <div className="box">
                   {pedidos != undefined ? pedidos.map(x => {
                       console.log(x);
                        <div className="item">
                        <div className="livro"><img src={x.infoc_tdv_pedido_items[0].ds_imagen} alt=""/></div>
                        <div className="descricao">{x.infoc_tdv_pedido_items[0].ds_descricao}</div>
                        <div className="menu">
                            <div className="menu-item">
                                <div className="imagem"><img src="/assets/images/caminhaoicone.svg" alt="" style={{marginLeft: 0.3 + "em"}}/></div>
                                <div className="descricao">{x.ds_situacao == "aprovado" ? x.ds_situacao + "Transportadora" : "Analizando" }</div>
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
                   }) : <h1> Voce nao fez nenhum Pedido</h1> }
                </div>
            </div>
            <Rodape/>
        </ContainerPedido>
     );
}