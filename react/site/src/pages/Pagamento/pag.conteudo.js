import { Link } from "react-router-dom";
import ParteCima from "../../components/Common/parteCima/componente";
import Rodape from "../../components/Common/rodape/redape";
import { ContainerPag } from "./pag.styled";
import Api from "../../service/apiUsuario";
import { useEffect, useState } from "react";
const api = new Api();


export default function Pagamentos() {
    const [pedidos, setpedidos] = useState([]);

    const  finalizarPedido =  async () =>{
        var  data = await api.efetuarpedido(1,pedidos);
      }
    return (    
        <ContainerPag>
            <ParteCima/>
                <div className="conteudos">
                    <div className="box-texto">
                        <div className="titulo"><h1>PAGAMENTO</h1></div>
                        <div className="caminho"><h5>SUA SACOLA - SUAS INFORMAÇÕES - <u style={{color:"#00EAFF"}}>PAGAMENTO</u> - FINALIZAÇÃO</h5></div>
                    </div>
                    <div className="box-big">
                        <aside>
                            <div className="formas">
                            <img src="/assets/images/pixpix.svg" alt=""/> <Link to="/pagamento_pix">Pix</Link>
                            </div>
                            <div className="formas" style={{ width:"94%", marginLeft:"0em", backgroundColor:"rgba(22, 118, 120, 0.4)", paddingLeft:"1em", margin:"0", height:"4.4em"}}>
                            <img src="/assets/images/cartaocreditocartao.svg" alt=""/> <Link to="/pagamento">Cartão de Crédito</Link>
                            </div>
                            {/*<div className="formas">
                            <img src="/assets/images/boleto(1).svg" alt=""/> <Link to="/pagamento_boleto">Boleto Bancário</Link>
    </div>}*/}
                        </aside>
                        <div className="box-info">
                            <div className="bandeiras">
                                    <img src="/assets/images/visa 1formas.svg" alt="" />
                                    <img src="/assets/images/mastercard- 1formas.svg" alt="" style={{height:"3.3em"}}/>
                                    <img src="/assets/images/elo- 1formas.svg" alt="" />
                                    <img src="/assets/images/hipercardformas.svg" alt="" />

                                   <div className="add"> <img src="assets/images/cartaoadd formas.svg" alt="" style={{height:"2.3em"}}/></div>   
                            </div>
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Número do cartão: *</label><br />
                                    <input type="text" required="required"  placeholder="____ ____ ____ ____"/><br/>
                                    <small>Insira somente números!</small>
                                </div>
                                    <br />
                                <div className="form-group1">
                                    <div>
                                        <label for="exampleInputEmail1">Nome do titular do cartão: *</label><br />
                                        <input type="text" id="left" required="required" placeholder="Ex: Roberto"/><br/>
                                    </div>
                                    <br />
                                    <div>
                                        <label for="exampleInputEmail1">Sobrenome: *</label><br />
                                        <input type="text" required="required" id="right" placeholder="Ex: Carlos"/><br/>
                                    </div>
                                </div>
                                <div className="form-group1">
                                    <div>
                                        <label for="exampleInputEmail1">Vencimento: *</label><br />
                                        <input type="month" id="right" required="required" placeholder="Ex: 05/22"/><br/>
                                        <small>Mês/Ano</small>
                                    </div>
                                    <br />
                                    <div>
                                        <label for="exampleInputEmail1">Código de Segurança(CVV): *</label><br />
                                        <input type="text" id="right" required="required" placeholder="Ex: 255"/><br/>
                                        <small>Insira somente números!</small>
                                    </div>
                                </div>
                                <div className="form-group1" style={{width: "91.5%"}}>
                                        <select name="parcela" id="parcela">
                                            <option value="" selected="">Selecionar parcelas para esta compra:</option>
                                            <option value="ADS">2x de R$ XXXX</option>
                                            <option value="ADS">3x de R$ XXXX</option>
                                            <option value="ADS">4x de R$ XXXX</option>
                                            <option value="ADS">5x de R$ XXXX</option>
                                            <option value="ADS">6x de R$ XXXX</option>
                                        </select>
                                        <div style={{marginRight: "auto", marginLeft: 0.3 + "em", fontSize:1.2 + "em", marginBottom: 1 + "em"}}>*</div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="botoes">
                        <Link to="/suas_infomacoes"><button type="button"   class="btn btn-default" style={{paddingLeft: 3.8 + "em", paddingRight: 3.8 + "em"}}>Voltar</button></Link>
                        <Link to="/compra_realizada"><button type="submit" class="btn btn-primary">Finalizizar pedido</button></Link>
                    </div>
                </div>
             <Rodape />
        </ContainerPag>
    );
}
