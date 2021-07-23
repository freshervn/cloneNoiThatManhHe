import React, { Component } from 'react';
// import * as BsIcons from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/myApp.scss';
import Navbar from './nav';
// import Home from './Home';
import About from './about';
import Family from './family';
// import Linh_tinh from './Lnh-tinh';
import Video from './Video'
import Footer from "./footer";
import Sach_cate from './Sach_cate';
import Sach from './sach';
import BornCalc from './tinh-ngay-sinh-cho-be';
import DAT_SKills from './DAT_SKills';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class App extends Component {   
    render() { 
        let width = window.innerWidth;
        if (width > 768) {        
            return (
                <Router>
                    <Navbar/>    
                        <Switch>
                            <Route path='' exact component={DAT_SKills}/>
                            <Route path='/family' exact component={Family}/>
                            {/* <Route path='/linh-tinh' exact component={Linh_tinh}/> */}
                            <Route path='/sach' exact component={Sach_cate}/>
                            <Route path='/sach/:id' component={Sach}/>
                            <Route path='/video' exact component={Video}/>                               
                            <Route path='/About' component={About}/>                                                                 
                            <Route path='/BornCalc' component={BornCalc}/>                               
                        </Switch>
                    <Footer/>
                </Router>
            );
        } 
        else {
            return (
                <Router>
                    <Navbar/>    
                        <Switch>
                            <Route path='/family' exact component={Family}/>
                            {/* <Route path='/linh-tinh' exact component={Linh_tinh}/> */}
                            <Route path='/sach' exact component={Sach_cate}/>
                            <Route path='/sach/:id' component={Sach}/>
                            <Route path='/video' exact component={Video}/>                                                                                          
                            <Route path='/About' component={About}/>     
                            <Route path='/BornCalc' component={BornCalc}/>                               
                        </Switch>
                    <Footer/>
                </Router>
            );
        }        
    }
}
export default App;