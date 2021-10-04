import {ContainerFav} from './styled';
import ParteCima from '../../components/Common/parteCima/componente';
import Rodape from '../../components/Common/rodape/redape'
import { Link } from 'react-router-dom';

export default function favoritos(){
   return(
      <ContainerFav>
          <ParteCima/>
          <div class="fav-container">
        <div class="conteiner">
              
            <div class="titulo">
                <div class="quadrado" style={{marginRight: "0.5em"}}></div>
                    <p>Favoritos</p>
                <div class="quadrado" style={{marginRight: "0.5em"}}></div>
            </div>

            <div class="box-mae">

                        <div class="selecao-livro">

                            <div class="box-livros">
                              
                                <div class="exemplo-radio">     <input type="checkbox" value="0"
                                    name="campo-checkbox" id="campo-checkbox" style={{accentColor: "blue"}}/> 
                                       <label for="campo-checkbox" ></label></div>
                                    <div class="imgl">
                                        <img src="/assets/images/COMÉDIA 1.svg" alt=""/>
                                        <div class="tllivro">
                                            A Divina Comédia Inferno - Dante Alighieri
                                        </div>
                                        <div class="preco">
                                            R$ 49,90
                                        </div>
                                        <div class="botao-preco">
                                            <Link to="/descricao"><button>Ver produto</button></Link>
                                        </div>
                                    </div>
                                    <hr/> 


                            </div>
                            <div class="box-livros2">
                              
                                <div class="exemplo-radio">     <input type="checkbox" value="0"
                                    name="campo-checkbox" id="campo-checkbox" style={{accentColor: "blue"}}/>    <label
                                    for="campo-checkbox" ></label></div>
                                    <div class="imgl">
                                        <img src="/assets/images/COMÉDIA 1.svg" alt=""/>
                                        <div class="tllivro">
                                            A Divina Comédia Inferno - Dante Alighieri
                                        </div>
                                        <div class="preco">
                                            R$ 49,90
                                        </div>
                                        <div class="botao-preco">
                                            <Link to="descricao"><button>Ver produto</button></Link>
                                        </div>
                                    </div>
                                    <hr/> 


                            </div>
                            <div class="excluir">
                                <div class="exemplo-radio">     <input type="checkbox" value="0"
                                    name="campo-checkbox" id="campo-checkbox"style={{accentColor: "blue"}}/>    <label
                                    for="campo-checkbox" ></label></div>
                                    <div class="tllivro2">
                                        Excluir favoritos       
                                        <div class="tllivro3">
                                            Favoritos 1 - 2 de 2
            
                                        </div>
                                    
                                    </div>
                            </div>
                           
                    </div>
                        </div>

</div>
</div>
          

          <Rodape/>
      </ContainerFav>
   )
}