import React, { Component } from 'react';
import myavtarHD from '../images/mattoifullhad.jpg';
import '../style/about.scss';
class About extends Component {
    state = {  }
    render() { 
        return (
        <main className='container pt-5 text-center'>
            <figure className='myavatar mx-auto mb-5'>
                <img src={myavtarHD } alt='myAvater' />
            </figure>
            <h1 className='size32'>
                <b>
                    Bùi Thành Đạt
                </b>
            </h1>
            <h2 className='size16'>
                Dev Độc thân vui tính
            </h2>
            <h3 className='size16'>
                <i>
                    Đầu óc cực kỳ đen tối!!
                </i>
            </h3>
        </main>
        );
    }
}
 
export default About;