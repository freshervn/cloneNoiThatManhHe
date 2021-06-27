import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.scss';
import btn_scroll from '../images/back-to-top.png';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.StrictMode>
                <span id="topPages"></span>  
                <a href='#topPages' id='btn-scroll'>
                    <img src={btn_scroll} alt="btn-scroll" />
                </a>
            </React.StrictMode>
         );
    }
}
 
export default Footer;