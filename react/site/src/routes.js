import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/conteudo'
import Redefinir from './pages/redefinir/esq.conteudo'
import Descontos from './pages/Desconto/desconto'
import Descricoes from './pages/descricao/desc.conteudo'



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/redefinir" exact={true} component={Redefinir} />
                <Route path="/desconto" exact={true} component={Descontos} />
                <Route path="/descricao" exact={true} component={Descricoes} />

            </Switch>
        </BrowserRouter>
    )
}
