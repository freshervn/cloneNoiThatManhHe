import React, { Component } from 'react';
function Hhtmlxampe(props) {    
    var screenwidth = window.innerWidth
    if (screenwidth < 567) {       
        return(
            null
        );
    }
    return (
        <aside className='back w-100 p-5'>
            <h3 className='text-center'>HTML</h3>
            <ul className='check'>
                <li>
                    HTML Basic Tag
                </li>
                <li>
                    HTML Semantic Tag
                </li>
                <li>
                    HTML Link Tag
                </li>
                <li>
                    HTML Form Tag
                </li>
            </ul>
        </aside>
    );    
}
 
export default Hhtmlxampe;