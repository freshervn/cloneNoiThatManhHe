import React, { Component } from 'react';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    render() { 
        return (          
        <nav className='container-fluid d-flex justify-content-between py-2 flex-wrap'>            
            <ul className='nav-links'>
                <li className='link'>
                    <Link to='/family'>
                        Gia Đình
                    </Link>
                </li>    
                <li className='link'>
                    <Link to='/linh-tinh'>
                        Linh tinh
                    </Link>
                </li>    
                <li className='link'>
                    <Link to='/video'>
                        Video
                    </Link>
                </li>                
                <li className='link'>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
        );
    }
}
export default Navbar;