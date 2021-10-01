import { Container  } from "./indexStyled.js";


export default function suaSacola(){
    return(
        <Container>
                <div class="conteudo">
                    <div class="titulo">
                        <div class="th1"><h1>Sua Sacola</h1></div>
                        <div class="trilhaM"><label>SUA SACOLA -  SUAS INFORMAÇÕES - PAGAMENTO -  FINALIZAÇÃO</label></div>
                    </div>
                    <div class="container-cont"></div>
                        <div class="tabela"></div>
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Produto</th>
                                    <th>Preço</th>
                                    <th>Quantidade</th>
                                    <th>Total</th>
                                    <th>Buttons</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr> 
                                <td><input type="checkbox" class="imputcheck" ></td>
                                <td><img src="" alt=""> <label>Descrição</label></td>   
                                <td><label>R$ 25,00</label></td>   
                                <td><button class="bimg">+</button>5<button class="bimg">-</button></td>  
                                <td><label>R$125,00</label></td>  
                                <td><button class="brem">*</button></td>  
                            </tr>
                            </tbody>
                        </table>
                        <div class="inputC">
                            <input type="checkbox" id='studo' class="imputcheck" >
                            <label for="studo" style="margin-right: 1em;"> Seleciona tudo</label>
                            <input type="checkbox" id='dtudo' class="imputcheck" >
                            <label for="dtudo"> Desmarca tudo</label>
                        </div>
                    </div>
                    <div class="cupom">
                        <div class="quadc">
                            <div class="th2"><h2>cupom</h2></div>
                            <div class="input"><input type="text" id="cupom" /></div>
                            <div class="btns">
                                <button class="btnss" >Remover</button>
                                <button class="btnss" >Aplicar</button>
                            </div>
                        </div>
                        <div class="quadb">
                            <button class="btnf">Proximo Passo</button>
                            <button class="btnf">Continuar Comprando</button>
                        </div>   
                    </div>
                </div>
        </Container>
    );

}