import {Container} from './styled'


export default function SuaSacola (){
    return(
        <Container>
                <div className='conteudo'>
                    <div className="titulo">
                        <div className="th1"><h1>Sua Sacola</h1></div>
                        <div className="trilhaM"><label>SUA SACOLA -  SUAS INFORMAÇÕES - PAGAMENTO -  FINALIZAÇÃO</label></div>
                    </div>
                    <div className="container-cont">
                        <div className="tabela">
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Produto</th>
                                        <th>Preço</th>
                                        <th>Quantidade</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr> 
                                    <td><input type="checkbox" className="imputcheck" /></td>
                                    <td><img src="" alt="" /> <label>Descrição</label></td>   
                                    <td><label>R$ 25,00</label></td>   
                                    <td><button className="bimg">+</button>5<button className="bimg">-</button></td>  
                                    <td><label>R$125,00</label></td>  
                                    <td><button className="brem"><img src='./assets/images/remove.svg' alt=' ' /></button></td>  
                                </tr>
                                </tbody>
                            </table>
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
                                <button className="btnf">Proximo Passo</button>
                                <button className="btnf">Continuar Comprando</button>
                            </div>   
                        </div>
                    </div>
                </div>
        </Container>
    )
}