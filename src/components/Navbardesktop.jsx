import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.scss';
class NavbarDesktop extends Component {
    render() { 
        return (          
            <nav className='container-fluid d-flex justify-content-between py-2 flex-wrap nav-index border-bottom'>                        
                <h1>hello</h1>
            </nav>
        );
    }
}
export default NavbarDesktop;