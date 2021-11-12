import { ContainerAdmpedidos } from "./adm_pedido.styled"
import Cabecalho from "../../components/Common/cabecalhoperfil/nav";
import Rodape  from "../../components/Common/rodape/redape";
import Barralat from "../../components/Common/barra_lateal_perfi";
import Api from "../../service/apiAdm";
import { useEffect, useState } from "react";


const api = new Api();

export default function Adm_pedidos() {
    const [data, setData] = useState([]);
    const [alter, setAlter] = useState(0);
    const [situacao, setSituacao] = useState("");
    useEffect(()=>{
        console.log('Just one time');
        listaPedido();
      
    },[]);
    const listaPedido = async () =>{
        let r = await api.listP();
        console.log(r);
        setData(r);
    }
    const deletePedido = async (id) => {
        let r = await api.deletePedido(id);
        listaPedido();
        alert("Pedido Excluido");
        return r.data;
        
    }
    const alteraSituaca =  async (id, situacao) =>{
        console.log("cheguei até aqui");
        let r = await api.alteraSituacao(id, situacao);
        listaPedido();
        
        alert("Situação alterada");
        setAlter(0);
        return r.data;
    }
    

    return (
        <ContainerAdmpedidos> 
                    <Cabecalho />                    
                    <div className="conteudo">
                        <div className="box_g">
                        <Barralat />
                            <div className="conteudo_direito">
                                <div className="box">
                                   <div className='aux'> 
                                        <div className="titulo">
                                            <div className="pedidos_img"><img src="./assets/images/pedidos.svg" alt=""/></div>
                                            <div className="pedidos"> Pedidos </div>
                                        </div>
                                        <div className="hp1-busca">
                                            <div className="divBusca">
                                                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
                                                <button><img src="./assets/images/Pesquisa.svg" id="btnBusca" alt="Buscar..." /></button>
                                              </div>
                                        </div>
                                    </div>
                                     
                                    <div className ="table-user" >
                                      {alter != 0 ? <input type='text' value={situacao} onChange={e => setSituacao(e.target.value)} /> : ' '}
                                        {alter != 0 ? <button onClick={() => alteraSituaca(alter, situacao) }>Enviar</button>: ''}
                                        <table >
                                            <thead>
                                                <tr>
                                                    <th> ID </th>
                                                    <th> Cliente </th>
                                                    <th> Livro </th>
                                                    <th> Endereço </th>                                            
                                                    <th> Total </th>
                                                    <th> Situação do Pedido </th>
                                                    <th className="a"> </th>
                                                    <th className="a"> </th>
                                                    <th className="a"> </th>
                                                    <th className="a"> </th>
                                                </tr>
                                            </thead>
                                            {data.map(x =>
                                                <tbody>
                                                        <tr>
                                                            <td>{x.id_pedido}</td>
                                                            <td>{x.id_cliente_infoc_tdv_cliente.nm_cliente} </td>
                                                            <td >{<img src={x.infoc_tdv_pedido_items[0].id_livro_infoc_tdv_livro.ds_imagen} style={{  height: "3em", width : "3em" }} alt="" />} </td>
                                                            <td>{x.id_cliente_infoc_tdv_cliente.infoc_tdv_enderecos[0].nm_rua}</td>
                                                            <td > </td>
                                                            <td >{ x.ds_situacao_ped}</td>
                                                            <td > </td>
                                                            <td > </td>
                                                            <td className = "aa"> <button> <img src="./assets/images/editar.svg"  onClick={() => setAlter(x.id_pedido)} alt="" /> </button> </td>
                                                            <td className = "aa"> <button> <img src="./assets/images/Errado.svg" onClick={ () => deletePedido(x.id_pedido)} alt="" /> </button> </td>
                                                        </tr>
                                                        
                                                    </tbody>   
                                            )}                                       
                                        </table>
                                       
                                        
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <Rodape />
    </ContainerAdmpedidos>
)}
