import { useState } from 'react';

export default function Carrinho (props){
    const [livro, setProduto] = useState(props.livros);

    return(
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
                                    <td><label>{livro.nm_livro}</label></td>   
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
                      
    )
}