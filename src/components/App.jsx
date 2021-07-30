import React, { Component } from 'react';
// import * as BsIcons from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/myApp.scss';
import Navbar from './nav';
import About from './about';
import Footer from "./footer";
import DAT_SKills from './DAT_SKills';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {        
    return (
        <Router>
            <Navbar/>                      
            <Switch>                                                           
                <Route path='/skills' exact component={DAT_SKills}/>                               
                <Route path='/' component={About}/>      
                <Route path='/about' component={About}/>
            </Switch>
            <Footer/>
        </Router>
    );                     
}
export default App;