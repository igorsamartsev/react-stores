import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import 'gestalt/dist/gestalt.css';


const Root = () =>(

  <Router>
    <React.Fragment>
    <Navbar/>
    <Switch>
    <Route path='/' exact component={App}/>
    <Route path='/signin' component={Signin}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/checkout' component={Checkout}/>
    </Switch>
    </React.Fragment>
  </Router>


);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
