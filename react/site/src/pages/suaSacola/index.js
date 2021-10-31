import {Container} from './styled'
import ParteCima from '../../components/Common/parteCima/componente'
import { Buttom } from '../../components/buttons/indexStyled'
import { Link } from 'react-router-dom'
import Rodape from '../../components/Common/rodape/redape'
import { useState } from 'react'
import Carrinho from './carrinhoItem/carrinho'
import Cookie from 'js-cookie';

export default function SuaSacola (props){
    const [livro, setLivro] = useState(props.location.state);

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
        {livro.map((item) => 
            <Carrinho key={item.id} 
                info={item} />
        )}
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