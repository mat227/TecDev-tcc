import { Link } from "react-router-dom";
import  ContainerPartecima  from "../../components/Common/parteCima/componente";
import { ContainerCompra } from "./comp.styled";

import Rodape from "../../components/Common/rodape/redape";


export default function CompraRealizada() {
    return (   
        <ContainerCompra>
            <ContainerPartecima />
                <div className="conteudo">
                    <div className="box-texto">
                            <div className="titulo"><h1>COMPRA REALIZADA!</h1></div>
                            <div className="caminho"><h5>SUA SACOLA - SUAS INFORMAÇÕES - PAGAMENTO - <u style={{color:"#00EAFF"}}>FINALIZAÇÃO</u></h5></div>
                    </div>
                    <div className="big-box">
                        <aside>
                            <h3 className="titulo2">Você comprou os seguintes itens:</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th style={{paddingRight: 12.3 + "vw"}}>Produto(s)</th>
                                        <th style={{paddingRight: 7 + "vw"}}>Quantidade</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="livro">
                                            <img src="/assets/images/o que o sol faz com as florescomprar(1).svg" alt="" style={{marginRight: 1 + "em"}}/>
                                            <div>O QUE O SOL FAZ<br/>COM AS FLORES<br/><br style={{marginTop: 1 + "em"}}/>Rupi Kaur</div>
                                        </td>   
                                    </tr>
                                    <tr style={{marginRight: 8.3 + "em"}}>
                                        <td>
                                            2
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            R$ 85,80
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </aside>
                        <div className="box-small">
                            <div className="box-confirmacao">
                                <div className="box-entrega">
                                    Entrega estimada em:&nbsp;&nbsp;<u style={{color:"#00EAFF"}}>5 dias úteis</u><br/><br/><br/><br/>
                                </div>
                                <div className="box-descricao">
                                    Seu pagamento está sendo processado!
                                    <br/><br/>
                                    Um e-mail de confirmação foi enviada <br/> para <u style={{color:"#00EAFF"}}>seuemail@seuemail.com</u>, os <br />detalhes da sua compra estarão lá :)
                                </div>
                            </div>
                            <div className="botoes">
                                <button>
                                    <Link to="/seus_pedidos">Seus pedidos</Link>
                                </button>
                                <button>
                                    <Link to="/homepage">Realizar nova compra</Link>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>            
            <Rodape/>
        </ContainerCompra>
    );
}