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


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/redefinir" exact={true} component={Redefinir} />
                <Route path="/desconto" exact={true} component={Descontos} />
                <Route path="/descricao" exact={true} component={Descricoes} />
                <Route path="/homepage" exact={true} component={Homepage} />
                <Route path="/genero" exact={true} component={Generos} />
                <Route path="/genero/terror" exact={true} component={Terror} />
                <Route path="/genero/humor" exact={true} component={Humor} />
                <Route path="/genero/romance" exact={true} component={Romance} />
                <Route path="/genero/biografia" exact={true} component={Biografia} />
                <Route path="/genero/poesia" exact={true} component={Poesia} />
            </Switch>
        </BrowserRouter>
    )
}
