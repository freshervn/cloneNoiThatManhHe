import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/navabout.scss";
function NavAbout(){
    var screenwidth = window.innerWidth
    if (screenwidth < 992) {       
        return(
            <nav className='row justify-content-between border-bottom about-nav px-3'>
                <Link to='/' className='btn bg-transparent'>
                    <img src={require('../images/icons/preview.png').default } alt="" className='h-1'/>
                </Link>
                <p className='size-20 my-auto mr-auto'>
                    <b>
                        Bùi Đạt
                    </b>
                </p>
                <label className="search btn mb-0">
                    <i data-visualcompletion="css-img" class="facebookSearch" ></i>
                    <input type="search" dir="ltr" aria-autocomplete="list" aria-expanded="false" aria-label="Tìm kiếm trên Facebook" role="combobox" placeholder="Tìm kiếm trên Facebook" autocomplete="off" name="global_typeahead" spellcheck="false" aria-invalid="false" value=""/>
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