import Container from "./styled";
import Qtd from "../quantidade";
import { useState } from "react";


export default function CarrinhoItem(props){

    const [ pedido, setPedido  ] = useState(props.info)


    // function alterar(qtd){
    //     setPedido({...pedido, qtd} )
    //     props.onChange(pedido.id_livro, qtd)
    // }


    function remover() {
        props.onRemove(pedido.id_livro);
      }

    console.log(pedido.id_livro)

    
    return(
        <Container>
             <img src={pedido.ds_imagen} alt="" />
            {/* <Qtd onChange={alterar} value={pedido.qtd } /> */}
            <div className="remove" onClick={remover}>Remover Pedido</div>
            <div className="pagamento">
                <div>Preço:</div>
                <div> { pedido.vl_para * pedido.qtd + ",00"}</div> 
            </div>
        </Container>
    )
}