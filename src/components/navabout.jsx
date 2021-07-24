import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/navmobie.scss";
function NavAbout(){
    var screenwidth = window.innerWidth
    if (screenwidth < 992) {       
        return(
            <nav className='d-flex justify-content-between border-bottom'>
                <Link to='/' className='btn bg-transparent'>
                    <img src={require('../images/icons/preview.png').default } alt="" className='h-1'/>
                </Link>
                <p className='size-20 my-auto mr-auto'>
                    <b>
                        Bùi Đạt
                    </b>
                </p>
                <label className="">
                    <div className="">
                        <i data-visualcompletion="css-img" class="facebookSearch" >
                        </i>
                    </div>
                    <input type="search" dir="ltr" aria-autocomplete="list" aria-expanded="false" aria-label="Tìm kiếm trên Facebook" role="combobox" placeholder="Tìm kiếm trên Facebook" autocomplete="off" name="global_typeahead" spellcheck="false" aria-invalid="false" value="" class="search"/>
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