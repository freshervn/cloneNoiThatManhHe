import React, { Component } from 'react';
import Imgmenu from "../images/product.jpg";
import '../style/Banner.scss';
class Banner extends Component {
    state = {}
    render() { 
        return ( 
            <div className='banner'>     
                <img src={Imgmenu} alt="" className='banne-img'/>  
            </div>
        );
    }container
}
 
export default Banner;