import React from 'react';
import { Link } from 'react-router-dom';
import "../style/navabout.scss";
function NavAbout(){
    var screenwidth = window.innerWidth
    if (screenwidth < 992) {       
        return(
            <nav className='d-flex justify-content-between border-bottom about-nav px-3'>
                <Link to='/' className='btn bg-transparent pl-0'>
                    <img src={require('../images/icons/preview.png').default } alt="" className='h-1'/>
                </Link>
                <p className='size-20 my-auto mr-auto'>
                    <b>
                        Bùi Đạt
                    </b>
                </p>
                <label className="search btn my-auto p-0">
                    <i data-visualcompletion="css-img" className="facebookSearch" ></i>
                    <input type="search" dir="ltr" aria-label="Tìm kiếm trên Facebook" placeholder="Tìm kiếm trên Facebook" name="global_typeahead" aria-invalid="false" value=""/>
                </label>
            </nav>
        );
    }
    else{
        return(
            null
        );
    }    
}
export default NavAbout;