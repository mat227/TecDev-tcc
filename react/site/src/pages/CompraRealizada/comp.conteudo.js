import { Link } from "react-router-dom";
import  ContainerPartecima  from "../../components/Common/parteCima/index";
import { ContainerCompra } from "./comp.styled";
import { useState ,useEffect } from "react";
import Cookie from "js-cookie";
import { useHistory } from "react-router-dom"

import Rodape from "../../components/Common/rodape/redape";




function lerUsuarioLogado (navigation) {
    let logado = Cookie.get('usuario-logadocli')
    if (logado == null) {
        navigation.push('/')
        return null;
    }
    let usuarioLogado = JSON.parse(logado);
    return usuarioLogado; 
}



export default function CompraRealizada(props) {
    const [livro] = useState(props.location.state);
console.log(livro)
    const nav = useHistory();

    const usuarioLogado = lerUsuarioLogado(nav) || {};

    const [usuario] = useState(usuarioLogado);

    console.log(usuario);
   
    
  
    
    return (   
        <ContainerCompra>
            <ContainerPartecima />
                <div className="conteudo">
                    <div className="box-texto">
                            <div className="titulo"><h1>COMPRA REALIZADA!</h1></div>
                            <div className="caminho"><h5>SUA SACOLA - PAGAMENTO - <u style={{color:"#00EAFF"}}>FINALIZAÇÃO</u></h5></div>
                    </div>
                    <div className="big-box">

                        <aside>
                            <h3 className="titulo2">Você comprou os seguintes itens:</h3>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Produto(s)</th>
                                        <th>Quantidade</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {livro.map((item) => (
                                    <tr>
                                        <td className="livro">
                                            <img src={item.ds_imagen} alt=""   style={{ height: "92px", width: "62px" }}/>
                                            <label> {item.nm_livro}<br/>{ item.ds_autora}   </label> 
                                        </td>   
                                        <td>
                                        <label>{item.qtd}  </label>
                                        </td>
                                        <td>
                                        <label> R$ {item.qtd*item.vl_para},00  </label>
                                        </td>
                                    </tr>
                                ))}
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
                                    Um e-mail de confirmação foi enviada <br/> para <u style={{color:"#00EAFF"}}> {usuario[0].ds_email}</u>, os <br />detalhes da sua compra estarão lá :)
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