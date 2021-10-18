import React from 'react';
// import * as BsIcons from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/myApp.scss';
import About from './about';
import Login from './Login/login';
// import DAT_SKills from './DAT_SKills';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {        
    return (
        <Router>

            <Switch>                                                                           

                <Route path='/login' exact component={Login}/>           

                {/* <Route path='/skills' exact component={DAT_SKills}/> */}

                <Route path='/' component={About}/>     

                <Route path='/about' component={About}/>

            </Switch>

        </Router>
    );                     
}
export default App;