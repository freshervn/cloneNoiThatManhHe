import React, { Component } from 'react';
import IMGHTML5 from '../images/HTML5.svg.png';
import IMGCSS3 from '../images/CSS3.svg.png';
import IMGJS6 from '../images/JS.png';
import Skill from '../data/my_skills.json';
import Hhtmlxampe from './htmlexam';
import '../style/DAT_skills.scss';
import '../style/catAnimation.scss'
class Banner extends Component {
    state = {}
    render() { 
        return ( 
            <div className='DAT_skills container py-5'>    
            <div>
                <svg viewBox="0 0 640 640" width="640" height="640" class='lmeo'>
                    <defs>
                        <path d="M551.05 328.27C511.76 376.78 443.17 386.35 397.84 349.65C352.51 312.94 347.61 243.86 386.9 195.34C426.18 146.83 494.77 137.26 600 100C585.43 210.68 590.33 279.76 551.05 328.27Z" id="dpyNF4z02"/>
                        <path d="M108.95 328.27C148.24 376.78 216.83 386.35 262.16 349.65C307.49 312.94 312.39 243.86 273.1 195.34C233.82 146.83 165.23 137.26 60 100C74.57 210.68 69.67 279.76 108.95 328.27Z" id="c57mRMPk00"/>                        
                        <path d="M578.47 401.06C580.03 516.59 471.2 611.87 335.6 613.7C200 615.53 88.65 523.22 87.09 407.69C85.53 292.16 194.35 196.88 329.95 195.04C465.55 193.21 576.91 285.53 578.47 401.06Z" id="a17mEoUZ6V" className='face'/>
                        <path d="M527.58 515.3C527.58 581.78 440 635.76 332.12 635.76C224.25 635.76 136.67 581.78 136.67 515.3C136.67 448.82 224.25 394.85 332.12 394.85C440 394.85 527.58 448.82 527.58 515.3Z" id="e1KLBN10ev"/>
                        <path d="M301 322.88C301 365.44 265.15 400 221 400C176.85 400 141 365.44 141 322.88C141 280.31 176.85 245.76 221 245.76C265.15 245.76 301 280.31 301 322.88Z" id="b46G81g4m"/>
                        <path d="M504.85 322.88C504.85 365.44 469 400 424.85 400C380.7 400 344.85 365.44 344.85 322.88C344.85 280.31 380.7 245.76 424.85 245.76C469 245.76 504.85 280.31 504.85 322.88Z" id="a3V889wdET"/>
                        <path d="M320 511.67L320 475.3L320 511.67Z" id="b1f1DCAVT2"/>
                        <path d="M302.91 516.97C293.47 516.96 285.82 511.59 285.82 504.95C285.82 486.59 320 477.47 320 476.97C320 476.97 320 476.97 320 476.97C320 477.47 354.18 486.59 354.18 504.96C354.18 511.59 346.53 516.97 337.09 516.97C327.65 516.97 320 512.26 320 505.62C320 512.26 312.35 516.97 302.91 516.97Z" id="e2Y7dsBMcX"/>
                        <path d="M302.91 440C293.47 440 285.82 445.38 285.82 452.01C285.82 470.38 320 479.49 320 480C320 480 320 480 320 480C320 479.49 354.18 470.38 354.18 452.01C354.18 445.38 346.53 440 337.09 440C327.65 440 320 444.71 320 451.34C320 444.71 312.35 440 302.91 440Z" id="dWWGkae1A"/>
                        <path d="M321.52 481.52L359.39 481.52L359.39 505.76L321.52 505.76L321.52 481.52Z" id="h285Jd27PP"/>
                        <path d="M278.48 480L316.36 480L316.36 504.24L278.48 504.24L278.48 480Z" id="g2cBzP2AMu"/>
                        <path d="M270 320C270 347.6 247.6 370 220 370C192.4 370 170 347.6 170 320C170 292.4 192.4 270 220 270C247.6 270 270 292.4 270 320Z" id="abAgHQxmi"/>
                        <path d="M476.67 323.33C476.67 350.93 454.26 373.33 426.67 373.33C399.07 373.33 376.67 350.93 376.67 323.33C376.67 295.74 399.07 273.33 426.67 273.33C454.26 273.33 476.67 295.74 476.67 323.33Z" id="c7vGl9lh2E"/>
                        <path d="M520 420L380 460L520 420Z" id="hdK0GkH5l" className='bread'/>
                        <path d="M520 455.61L380 480L520 455.61Z" id="cuUuYHHc" className='bread'/>
                        <path d="M500 480L380 500L500 480Z" id="e1LFDbsRdN" className='bread'/>
                        <path d="M120 420L260 460L120 420Z" id="a6y5tJmgUP" className='bread-right'/>
                        <path d="M260 484.39L120 460L260 484.39Z" id="a9dz5WgJcW" className='bread-right'/>
                        <path d="M260 504.55L140 484.55L260 504.55Z" id="dK3upRT9A" className='bread-right'/>
                        <path d="M248.67 329.85C248.67 344.9 241.2 357.12 232 357.12C222.8 357.12 215.33 344.9 215.33 329.85C215.33 314.8 222.8 302.58 232 302.58C241.2 302.58 248.67 314.8 248.67 329.85Z" id="aiFQ3AiFi" className='left-pupil'/>
                        <path d="M430.79 328.64C430.79 343.69 423.32 355.91 414.12 355.91C404.92 355.91 397.45 343.69 397.45 328.64C397.45 313.58 404.92 301.36 414.12 301.36C423.32 301.36 430.79 313.58 430.79 328.64Z" id="b2rUrt7Rzp" className='right-pupil'/>
                    </defs>
                    <g>
                    <g>
                        <g>
                        <use href="#dpyNF4z02" opacity="1" fill="#66604e" class="theme" fill-opacity="1"/>
                        <g>
                            <use href="#dpyNF4z02" opacity="1" fill-opacity="0" stroke="#1a201a" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <use href="#c57mRMPk00" opacity="1" fill="#ffffff" class="bg" fill-opacity="1"/>
                        <g>
                            <use href="#c57mRMPk00" opacity="1" fill-opacity="0" stroke="#1a201a" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <use href="#a17mEoUZ6V" opacity="1" fill="#ffffff" class="bg" fill-opacity="1"/>
                        <g>
                            <use href="#a17mEoUZ6V" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <use href="#e1KLBN10ev" opacity="1" fill="#66604e" class="theme" fill-opacity="1"/>
                        <g>
                            <use href="#e1KLBN10ev" opacity="1" fill-opacity="0" stroke="#1c231c" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <use href="#b46G81g4m" opacity="1" fill="#66604e" class="theme" fill-opacity="1"/>
                        </g>
                        <g>
                        <use href="#a3V889wdET" opacity="1" fill="#66604e" class="theme" fill-opacity="1"/>
                        </g>
                        <g>
                        <g>
                            <use href="#b1f1DCAVT2" opacity="1" fill-opacity="0" stroke="#1c231c" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <use href="#e2Y7dsBMcX" opacity="1" fill-opacity="0" stroke="#1a201a" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <use href="#dWWGkae1A" opacity="1" fill="#cc8e4a" class="hightlight nose" fill-opacity="1"/>
                        </g>
                        <g>
                        <use href="#h285Jd27PP" opacity="1" fill="#66604e" class="theme" fill-opacity="1"/>
                        </g>
                        <g>
                        <use href="#g2cBzP2AMu" opacity="1" fill="#66604e" class="theme" fill-opacity="1"/>
                        </g>
                        <g>
                        <use href="#abAgHQxmi" opacity="1" fill="#fcfffd" fill-opacity="1"/>
                        </g>
                        <g>
                        <use href="#c7vGl9lh2E" opacity="1" fill="#fcfffd" fill-opacity="1"/>
                        </g>
                        <g>
                        <g>
                            <use href="#hdK0GkH5l" opacity="1" fill-opacity="0" stroke="#1c231c" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <use href="#cuUuYHHc" opacity="1" fill-opacity="0" stroke="#1c231c" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <use href="#e1LFDbsRdN" opacity="1" fill-opacity="0" stroke="#1c231c" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <use href="#a6y5tJmgUP" opacity="1" fill-opacity="0" stroke="#1c231c" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <use href="#a9dz5WgJcW" opacity="1" fill-opacity="0" stroke="#1c231c" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <g>
                            <use href="#dK3upRT9A" opacity="1" fill-opacity="0" stroke="#1c231c" stroke-width="1" stroke-opacity="1"/>
                        </g>
                        </g>
                        <g>
                        <use href="#aiFQ3AiFi" opacity="1" fill="#cc8e4a" class="hightlight" fill-opacity="1"/>
                        </g>
                        <g>
                        <use href="#b2rUrt7Rzp" opacity="1" fill="#cc8e4a" class="hightlight" fill-opacity="1"/>
                        </g>
                    </g>
                    </g>
                </svg>
            </div>    
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