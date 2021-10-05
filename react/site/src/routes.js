import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/conteudo'
import Redefinir from './pages/redefinir/esq.conteudo'
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
import Cadastro from './pages/Cadastro/cadastro'
import Cupons from './pages/Cupons/cup'
import Pagamentos from './pages/Pagamento/pag.conteudo'
import CompraRealizada from './pages/CompraRealizada/comp.conteudo'
import Boleto from './pages/Pagamento/boleto/boleto.conteudo'
import Pix from './pages/Pagamento/pix/pix.conteudo'
import PerfilADM from './pages/perfil_adm'
<<<<<<< HEAD
import SuaInfo from './pages/suaInfo'
=======
import SuaInfo from './pages/suaInfo/index'
>>>>>>> e55a3fb585e3b0506153279e249b640911ec5951

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Homepage} />
                <Route path="/redefinir" exact={true} component={Redefinir} />
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
                <Route path="/pagamento_boleto" exact={true} component={Boleto} />
                <Route path="/pagamento_pix" exact={true} component={Pix} />
                <Route path="/compra_realizada" exact={true} component={CompraRealizada} /> 
                <Route path="/perfil_adm" exact={true} component={PerfilADM} /> 
<<<<<<< HEAD
                <Route path="/suas_infomacoes" exact={true} component={SuaInfo} /> 
=======
                <Route path="/info" exact={true} component={SuaInfo} /> 

>>>>>>> e55a3fb585e3b0506153279e249b640911ec5951
            </Switch>
        </BrowserRouter>
    )
}
