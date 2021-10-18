import React from 'react';
import Navbarmobie from './Navbarmobie';
import Navbardesktop from './Navbardesktop';
function Navbar() { 
    var windowsize = window.innerWidth;
    // console.log(windowsize);
    if (windowsize < 992) {        
        return (          
            <Navbarmobie/>
        );        
    }
    else{
        return (          
            <Navbardesktop/>
        );
    }
}
export default Navbar;