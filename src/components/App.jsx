import React, { Component } from 'react';
// import * as BsIcons from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/myApp.scss';
import Navbar from './nav';
import About from './about';
import Footer from "./footer";
import DAT_SKills from './DAT_SKills';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class App extends Component {   
    render() { 
        return (
            <Router>
                <Navbar/>    
                <Switch>                                                           
                    <Route path='/' exact component={DAT_SKills}/>                               
                    <Route path='/About' component={About}/>      
                </Switch>
                <Footer/>
            </Router>
        );                 
    }
}
export default App;