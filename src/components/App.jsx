import React, { Component } from 'react';
// import * as BsIcons from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/myApp.scss';
import Navbar from './nav';
import Home from './Home';
import About from './about';
import Family from './family';
// import Linh_tinh from './Lnh-tinh';
import Video from './Video'
import Footer from "./footer";
import Sach from './Sach';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {   
    render() { 
        return (      
            <Router>
                <Navbar/>    
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/family' exact component={Family}/>
                    {/* <Route path='/linh-tinh' exact component={Linh_tinh}/> */}
                    <Route path='/sach' exact component={Sach}/>
                    <Route path='/video' exact component={Video}/>                               
                    <Route path='/About' component={About}/>                               
                </Switch>
                <Footer/>
            </Router>
        );
    }
}
export default App;