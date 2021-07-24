import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbarmobie from './Navbarmobie';
function Navbar() { 
    var windowsize= window.width;
    if (windowsize<768) {        
        return (          
            <Navbarmobie/>
        );        
    }
    return (          
        <Navbarmobie/>
    );
}
export default Navbar;