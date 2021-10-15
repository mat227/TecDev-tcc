import { Link } from "react-router-dom";
import { ContainerAdm_pedidos } from "./adm_pedido.styled"



export default function Adm_pedidos() {
    return (
        <ContainerAdm_pedidos> 
    <div class="container">

        <div class="cabecalho">
            <div class="perfil">
                <div class="foto_do_perfil">
                    <div class="adicionar">
                    <img src="/assets/images/+.svg" alt=""/>
                    </div>
                    <div class="bola"><img src="/assets/images/Ellipse 32.svg" alt=""/></div>
                    <div class="adicionar_foto">Adicionar Foto</div>
                </div>
            </div>
            <div class="nome_adm"> 
                <div class="nome"> Olá, Fulano Siclano! </div>
                <div class="adm"> Administrador</div>
            </div>
        </div>

        
        <div class="conteudo">
            <div class="box_g">
                <div class="conteudo_esquerdo">
                    <div class="informacao">

                        <div class="botao1"><button>Livros</button></div>
                        <div class="botao2"> <button>Cupons e <br/>promoções</button> </div> 
                        <div class="botao3"><button>Suas informações</button></div>
                        <div class="botao_e"><button>Pedidos</button></div>

                    </div>
                </div>

                <div class="conteudo_direito">
                    <div class="box">
                        <div class="titulo">
                            <div class="pedidos_img"><img src="/assets/images/pedidos.svg" alt=""/></div>
                            <div class="pedidos"> Pedidos </div>
                        </div>
 
                        
                        <div class="hp1-busca">
                            <div class="divBusca">
                                <button><img src="/assets/images/pesquisa.svg" id="btnBusca" alt="Buscar..." /></button>
                                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
                               
                            </div>
                        </div>

                        <table class ="table-user">
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
                                    <th class="a"> </th>
                                    <th class="a"> </th>
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
                                    <td class = "aa"> <button> <img src="../Adm_pedidos/assets/images/Errado.svg" /> </button> </td>
                                </tr>
                                
                            </tbody> 
        
                        </table>
                    </div>
                </div> 
            </div>
            <div class="redes">
                <div class="logo"> 
                    <div class="img_logo">
                        <img src="/assets/images/logo_atual.svg" alt=""/>
                    </div>
                    <div class="tecdev"> by TecDev </div>
                </div>
                <div class="redes_sociais"> 
                    <div class="instagram">
                        <img src="/assets/images/instagram.svg" alt=""/>
                    </div>
                    <div class="facebook">
                        <img src="/assets/images/Vector(1).svg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </ContainerAdm_pedidos>

)

}
