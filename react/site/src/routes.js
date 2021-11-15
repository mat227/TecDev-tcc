import { BrowserRouter, Switch, Route } from 'react-router-dom'


import partecima2 from './components/Common/partecima2/cima'
import Trio from './components/Common/trio/trio'
import Login from './pages/login/conteudo'

import Redefinir from './pages/redefinir/esq.conteudo'
import Reset from './pages/redefinir/reset/reset.conteudo'

import Responsivo from  './components/Common/partecima2/cima'

import Descontos from './pages/Desconto/desconto'
import Descricoes from './pages/descricao/desc.conteudo'
import Homepage from './pages/Homepage1/home.js'
import Generos from './pages/Genero/genre.conteudo'
import Terror from './pages/Genero/GenreType/1terror.conteudo'
import Humor from './pages/Genero/GenreType/2humor.conteudo'
import Romance from './pages/Genero/GenreType/3romance.conteudo'
import Biografia from './pages/Genero/GenreType/4biografia.conteudo'
import Poesia from './pages/Genero/GenreType/5poesia.conteudo'
import favoritos from './pages/seusFavoritos/fav'
import SuaSacola from './pages/suaSacola'
import Cadastro from './pages/Cadastro/cadas.js'
import Cupons from './pages/Cupons/cup'
import Pagamentos from './pages/Pagamento/pag.conteudo'
import CompraRealizada from './pages/CompraRealizada/comp.conteudo'
import Pix from './pages/Pagamento/pix/pix.conteudo'
import SuaInfo from './pages/suaInfo'
import SeusPedidos from './pages/SeusPedidos/pedi.conteudo'
import Perfilusu from './pages/perfil/index'
import Adm_c from './pages/Adm_c_p/Adm_c_p.js'
import Adm_pedido from './pages/Adm_pedidos/Adm_pedidos.js'
import PerfilADM from './pages/perfil_adm'
import Adm_livro from './pages/Adm_Livro'
import Homepageslogin from  './pages/homepageslogin/homepages'
import Busca from './pages/Busca/conteudo';
import Descricaoslogin from './pages/descricaoslogin/des.js';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Homepageslogin} />
                <Route path="/homepage" exact={true} component={Homepage} />

                <Route path="/redefinir" exact={true} component={Redefinir} />                
                <Route path="/reset" exact={true} component={Reset} />
                
                <Route path="/responsivo" exact={true} component={Responsivo} />
                <Route path="/descricaol" exact={true} component={Descricaoslogin} />

                <Route path="/busca" exact={true} component={Busca} />

                <Route path="/desconto" exact={true} component={Descontos} />
                <Route path="/descricao" exact={true} component={Descricoes} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/genero" exact={true} component={Generos} />
                <Route path="/genero/terror" exact={true} component={Terror} />
                <Route path="/genero/humor" exact={true} component={Humor} />
                <Route path="/genero/romance" exact={true} component={Romance} />
                <Route path="/genero/biografia" exact={true} component={Biografia} />
                <Route path="/genero/poesia" exact={true} component={Poesia} />
                <Route path="/favoritos" exact={true} component={favoritos} />
                <Route path="/suasacola" exact={true} component={SuaSacola} />
                <Route path="/cadastro" exact={true} component={Cadastro} />
                <Route path="/cupons" exact={true} component={Cupons} />
                <Route path="/pagamento" exact={true} component={Pagamentos} />
                <Route path="/pagamento_pix" exact={true} component={Pix} />
                <Route path="/compra_realizada" exact={true} component={CompraRealizada} /> 
                <Route path="/perfil_adm" exact={true} component={PerfilADM} /> 
                <Route path="/perfil_adm_c" exact={true} component={Adm_c} />
                <Route path="/adm_pedido" exact={true} component={Adm_pedido} />
                <Route path="/adm_livro" exact={true} component={Adm_livro} />
                <Route path="/suas_infomacoes" exact={true} component={SuaInfo} /> 
                <Route path="/seus_pedidos" exact={true} component={SeusPedidos} /> 
                <Route path="/perfil" exact={true} component={Perfilusu} /> 


                <Route path="/partecima2" exact={true} component={partecima2} />
                <Route path="/trio" exact={true} component={Trio} />
            </Switch>
        </BrowserRouter>
    )
}
