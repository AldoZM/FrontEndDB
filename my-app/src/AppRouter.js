import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ButtonAppBar from './AppBar';
import Carrito from './Carro';
import PaginaPri from './PaginaPrin';
import Contactos from './Contactos'
import './App.css'
export default function AppRouter() {
    return (
        <Router>
            <ButtonAppBar/>
            <Switch>
                {/* <Route path = '/inventario' component = {}/>
                <Route path = '/re_cliente' component ={}/>*/}
                <Route path = '/carrito' component = {Carrito}/> 
                <Route path = '/' component ={PaginaPri} />

            </Switch>
            <Contactos className="final"/>
        </Router>
    );
}
