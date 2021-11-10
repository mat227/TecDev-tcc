import {Container} from './styled'
import ParteCima from '../../components/Common/parteCima/componente'
import { Buttom } from '../../components/buttons/indexStyled'
import { Link } from 'react-router-dom'
import Rodape from '../../components/Common/rodape/redape'
import { useState } from 'react'
import Cookie from 'js-cookie';
import { useEffect } from 'react'
import Contador from './Ct/contador'

export default function SuaSacola (props){
    const [livro, setLivro] = useState([]);


    useEffect(carregarCarrinho, []);

  function carregarCarrinho() {
    
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
                  ? JSON.parse(carrinho) 
                  : [];
    setLivro(carrinho);
  }

  /*function marcarTodos(marcar){
    var itens = document.querySelectorAll("input");

    var i = 0;
    for(i=0; i<itens.length;i++){
        itens[i].checked = marcar;
    }
}*/


    return(
        <Container>
            <ParteCima/>
                <div className='conteudo'>
                    <div className="titulo">
                        <div className="th1"><h1>Sua Sacola</h1></div>
                        <div class="trilhaM"><label style={{color : "#00EAFF"}} >SUA SACOLA  </label> - <label > SUAS INFORMAÇÕES - </label> <label>PAGAMENTO - </label> <label>  FINALIZAÇÃO</label></div>
                    </div>
                    <div className="container-cont">

                    <div className="itens">
   
                <div className="tabela">
                <table>
                <thead>
                                    <tr>
                                        <th className="1"></th>
                                        <th className="2">Produto</th>
                                        <th className="3">Preço</th>
                                        <th className="4">Quantidade</th>
                                        <th className="5">Total</th>
                                        <th className="espaco"> </th>
                                    </tr>
                                </thead>
                    <tbody>
                {livro.map((item) => 
                    <tr> 
                        <td><input type="checkbox" className="imputcheck" /></td>
                        <td><img src="" alt="" /> <label><img src={item.ds_imagen} alt=""     style={{ height: "100px", width: "100" }}/></label></td>   
                        <td><label>R$ {item.vl_para}</label></td>   
                        <td><button className="bimg">+</button>5<button className="bimg">-</button></td>  
                        <td><label>{item.vl_para}</label></td>  
                        <td><button className="brem"><img  src='./assets/images/remove.svg' alt=' ' /></button></td>  
                        </tr>
        )}

                    </tbody>
                </table>
               
            </div>
      </div>
                        <div className="cupom">
                       
                            <div className="quadb">
                                <Buttom className="btnf"><Link to='/pagamento'>Proximo passo</Link></Buttom>
                                <Buttom className="btnf"><Link to='/' >Continuar Comprando</Link></Buttom>
                            </div>   
                        </div>
                    </div>
                </div>
                <Rodape/>
        </Container>
    )
}