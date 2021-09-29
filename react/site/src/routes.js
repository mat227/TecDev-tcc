import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login/conteudo'
import Redefinir from './pages/redefinir/esq.conteudo'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/redefinir" exact={true} component={Redefinir} />
            </Switch>
        </BrowserRouter>
    )
}
