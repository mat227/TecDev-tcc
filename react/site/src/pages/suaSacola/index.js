import {Container} from './styled'
import ParteCima from '../../components/Common/parteCima/componente'
import { Buttom } from '../../components/buttons/indexStyled'
import { Link } from 'react-router-dom'
import Rodape from '../../components/Common/rodape/redape'
import { useState } from 'react'
import Carrinho from './carrinhoItem/carrinho'
import Cookie from 'js-cookie';
import { useEffect } from 'react'

export default function SuaSacola (props){
    const [livro, setLivro] = useState([]);
    console.log(livro);

    useEffect(carregarCarrinho, []);

  function carregarCarrinho() {
    
    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined 
                  ? JSON.parse(carrinho) 
                  : [];
    setLivro(carrinho);
  }
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
                    <thead>
                                    <tr>
                                        <th className="1"></th>
                                        <th className="2">Produto</th>
                                        <th className="3">Preço</th>
                                        <th className="4">Quantidade</th>
                                        <th className="5">Total</th>
                                    </tr>
                                </thead>
        {livro.map((item) => 
            <Carrinho key={item.id_livro} 
                info={item} />
        )}
         <div className="inputC">
                                <input type="checkbox" id='studo' className="imputcheck" />
                                <label for="studo" style={{'margin-right': '1em'}}> Seleciona tudo</label>
                                <input type="checkbox" id='dtudo' className="imputcheck" />
                                <label for="dtudo"> Desmarca tudo</label>
                            </div>
      </div>
                        <div className="cupom">
                            <div className="quadc">
                                <div className="th2"><h2>cupom</h2></div>
                                <div className="input"><input type="text" id="cupom" /></div>
                                <div className="btns">
                                    <button className="btnss" >Remover</button>
                                    <button className="btnss" >Aplicar</button>
                                </div>
                            </div>
                            <div className="quadb">
                                <Buttom className="btnf"><Link to='/suas_infomacoes'>Proximo passo</Link></Buttom>
                                <Buttom className="btnf"><Link to='/' >Continuar Comprando</Link></Buttom>
                            </div>   
                        </div>
                    </div>
                </div>
                <Rodape/>
        </Container>
    )
}