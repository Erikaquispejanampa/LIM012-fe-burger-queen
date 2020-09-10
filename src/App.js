import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Page1}/>
            <Route exact path='/mesero/RealizarPedido' component={Page2}/>
            <Route exact path='/mesero/EstadoDePedido' component={Page3}/>
            <Route exact path='/mesero/HistorialDePedido' component={Page4}/>
            <Route exact path='/cocinero/OrdenesDePedido' component={Page5}/>
            <Route exact path='/cocinero/HistoricoCocina' component={Page6}/>
            <Route component={Page1}/>
        </Switch>
    );
}

export default App;

