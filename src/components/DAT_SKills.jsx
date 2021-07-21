import React, { Component } from 'react';
import IMGHTML5 from '../images/HTML5.svg.png';
import IMGCSS3 from '../images/CSS3.svg.png';
import IMGJS6 from '../images/JS.png';
import '../style/DAT_skills.scss';
class Banner extends Component {
    state = {}
    render() { 
        return ( 
            <div className='DAT_skills container py-5'>    
                <div className='row'>
                    <blockquote className='col-md-4 p-4'>
                        <div className='hv-flip-X'>
                            <main className='shadow position-realtive skill rounded'>                            
                                <aside className='font p-4'>
                                    <img src={IMGHTML5} alt="html logo" className='w-100 p-5'/>                  
                                </aside>                    
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
                            </main>
                        </div>
                    </blockquote>
                    <blockquote className='col-md-4 p-4'>
                        <div className='hv-flip-X'>
                            <main className='shadow position-realtive skill rounded'>                            
                                <aside className='font p-4'>
                                    <img src={IMGCSS3} alt="css logo" className='w-100 p-5'/>                  
                                </aside>                    
                                <aside className='back w-100 p-5'>
                                    <h3 className='text-center'>CSS</h3>
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
                            </main>
                        </div>
                    </blockquote>
                    <blockquote className='col-md-4 p-4'>                        
                        <div className='hv-flip-X'>
                            <main className='shadow position-realtive skill rounded'>                            
                                <aside className='font p-4'>
                                    <img src={IMGJS6} alt="js logo" className='w-100 p-5'/>                  
                                </aside>                    
                                <aside className='back w-100 p-5'>
                                    <h3 className='text-center'>JS</h3>
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
                            </main>
                        </div>
                    </blockquote>
                </div> 
            </div>
        );
    }container
}
 
export default Banner;