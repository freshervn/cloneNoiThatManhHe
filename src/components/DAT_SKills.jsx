import React, { Component } from 'react';
import IMGHTML5 from '../images/HTML5.svg.png';
import IMGCSS3 from '../images/CSS3.svg.png';
import IMGJS6 from '../images/JS.png';
import Skill from '../data/my_skills.json';
import Hhtmlxampe from './htmlexam';
import '../style/DAT_skills.scss';
class Banner extends Component {
    state = {}
    render() { 
        return ( 
            <div className='DAT_skills container py-5'>    
                <div className='row mx-0'>
                    {Skill.map( (skill) =>
                        <blockquote className='col p-1 p-md-2 p-ld-4'>
                            <div className='hv-flip-X'>
                                <main className='shadow position-realtive skill rounded'>                            
                                    <aside className='font p-1 p-md-2 p-lg-4'>
                                    <img src={skill.images} alt="html logo" className='w-100 p-1 p-md-2 p-lg-5'/>                  
                                    </aside>                 
                                    <Hhtmlxampe/>
                                </main>
                            </div>
                        </blockquote>
                    )}                                                                                                                    
                </div> 
            </div>
        );
    }container
}
 
export default Banner;