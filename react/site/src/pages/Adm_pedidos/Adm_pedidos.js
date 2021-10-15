import { Link } from "react-router-dom";
import { ContainerAdm_pedidos } from "./adm_pedido.styled"



export default function Adm_pedidos() {
    return (
        <ContainerAdm_pedidos> 
    <div className="container">

        <div className="cabecalho">
            <div className="perfil">
                <div className="foto_do_perfil">
                    <div className="adicionar">
                    <img src="/assets/images/+.svg" alt=""/>
                    </div>
                    <div className="bola"><img src="/assets/images/Ellipse 32.svg" alt=""/></div>
                    <div className="adicionar_foto">Adicionar Foto</div>
                </div>
            </div>
            <div className="nome_adm"> 
                <div className="nome"> Olá, Fulano Siclano! </div>
                <div className="adm"> Administrador</div>
            </div>
        </div>

        
        <div className="conteudo">
            <div className="box_g">
                <div className="conteudo_esquerdo">
                    <div className="informacao">

                        <div className="botao1"><button>Livros</button></div>
                        <div className="botao2"> <button>Cupons e <br/>promoções</button> </div> 
                        <div className="botao3"><button>Suas informações</button></div>
                        <div className="botao_e"><button>Pedidos</button></div>

                    </div>
                </div>

                <div className="conteudo_direito">
                    <div className="box">
                        <div className="titulo">
                            <div className="pedidos_img"><img src="/assets/images/pedidos.svg" alt=""/></div>
                            <div className="pedidos"> Pedidos </div>
                        </div>
 
                        
                        <div className="hp1-busca">
                            <div className="divBusca">
                                <button><img src="/assets/images/pesquisa.svg" id="btnBusca" alt="Buscar..." /></button>
                                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
                               
                            </div>
                        </div>

                        <table className ="table-user">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Cliente </th>
                                    <th> Livro </th>
                                    <th> Endereço </th>
                                    <th> Valor </th>
                                    <th> Frente </th>
                                    <th> Total </th>
                                    <th> Pagamento </th>
                                    <th className="a"> </th>
                                    <th className="a"> </th>
                                </tr>
                            </thead>
                    
                            <tbody>
                                <tr >
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td> </td>
                                    <td > </td>
                                    <td > </td>
                                    <td > </td>
                                    <td > </td>
                                    <td> <button> <img src="/assets/images/Correto.svg" alt="" /> </button> </td>
                                    <td className = "aa"> <button> <img src="../Adm_pedidos/assets/images/Errado.svg" /> </button> </td>
                                </tr>
                                
                            </tbody> 
        
                        </table>
                    </div>
                </div> 
            </div>
            <div className="redes">
                <div className="logo"> 
                    <div className="img_logo">
                        <img src="/assets/images/logo_atual.svg" alt=""/>
                    </div>
                    <div className="tecdev"> by TecDev </div>
                </div>
                <div className="redes_sociais"> 
                    <div className="instagram">
                        <img src="/assets/images/instagram.svg" alt=""/>
                    </div>
                    <div className="facebook">
                        <img src="/assets/images/Vector(1).svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </ContainerAdm_pedidos>

)

}
