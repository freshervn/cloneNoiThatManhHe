import React, { Component } from 'react';
// import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../style/nav.scss';
class Navbar extends Component {
    render() { 
        return (          
            <nav className='container-fluid d-flex justify-content-between py-2 flex-wrap nav-index'>            
                <ul className='nav-links'>
                    {/* <li className='link'>
                        <Link to='/family'>
                            Gia Đình
                        </Link>
                    </li>     */}
                    <li className='link'>
                        <Link to='/my_diary' replace='false'>
                            Home
                        </Link>
                    </li>    
                    <li className='link'>
                        <Link to='/sach' replace='false'>
                            Sách
                        </Link>
                    </li>    
                    {/* <li className='link'>
                        <Link to='/video'>
                            Video
                        </Link>
                    </li>                 */}
                    <li className='link'>
                        <Link to='/about' replace='false'>
                            Mô tả                        
                        </Link>
                    </li>
                    {/* <li className='link'>
                        <Link to='/BornCalc' replace='false'>
                            Tính ngày sinh cho bé                      
                        </Link>
                    </li> */}
                </ul>
            </nav>
        );
    }
}
export default Navbar;