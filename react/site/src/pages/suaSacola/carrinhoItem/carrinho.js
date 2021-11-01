import { useState } from 'react';

export default function Carrinho (props){
    const [livro, setProduto] = useState(props.info);
console.log(livro)
    return(
                        <div className="tabela">
                            <table>
                               
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
                           
                        </div>
                      
    )
}