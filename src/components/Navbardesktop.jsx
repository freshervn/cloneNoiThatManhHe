import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navmobie.scss';
import '../style/navdesktop.scss';
function Navbardesktop() {
    const [active,setActive] = useState(true)
    const Changestab = (tabActive) =>{
        console.log(active);
        setActive(tabActive);
    }
    return (          
        <nav className='w-100 d-flex justify-content-between nav-index nav-desktop px-1 '>  
            <div className='mr-auto py-2 ml-3'>
                <Link>
                <svg viewBox="0 0 36 36" class="facebook-logo mr-2" fill="url(#jsc_s_y)" height="40" width="40">
                    <defs>
                        <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_y">
                            <stop offset="0%" stop-color="#0062E0"></stop>
                            <stop offset="100%" stop-color="#19AFFF"></stop>
                        </linearGradient>
                    </defs>
                    <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
                    <path class="p361ku9c" fill='white' d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path>
                </svg>
                </Link>
                <label className="search btn my-auto p-0">
                    <i data-visualcompletion="css-img" class="facebookSearch" ></i>
                    <input type="search" dir="ltr" aria-autocomplete="list" aria-expanded="false" aria-label="Tìm kiếm trên Facebook" role="combobox" placeholder="Tìm kiếm trên Facebook" autocomplete="off" name="global_typeahead" spellcheck="false" aria-invalid="false" value=""/>
                </label>
            </div>                      
            <ul className='nav-links py-2'>
                <li className={'link ' + (active =='Home' ? 'active' : '') } onClick={()=>Changestab('Home')}>
                    <Link to='/' replace='false'>                            
                        <svg viewBox="0 0 28 28" className="icon on">
                            <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29">
                        </path>
                    </svg>
                    </Link>
                </li>                           
                <li className={'link ' + (active =='fbtv' ? 'active' : '') } onClick={()=>Changestab('fbtv')}>
                    <Link to='/' replace='false'>                            
                    <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv" height="28" width="28">
                        <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z">
                        </path>
                    </svg>
                    </Link>
                </li>               
                <li className={'link ' + (active =='datcv' ? 'active' : '') } onClick={()=>Changestab('datcv')}>
                    <Link to='/' replace='false'>                            
                        <img src={require('../images/icons/topcv.ico').default} alt=""/>
                    </Link>
                </li>        
                <li className={'link ' + (active =='notification' ? 'active' : '') } onClick={()=>Changestab('notification')}>
                    <Link to='/' replace='false'>                                                    
                        <svg viewBox="0 0 28 28" alt="" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry" height="20" width="20">
                            <path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z">
                            </path>
                        </svg>
                    </Link>
                </li>              
                <li className={'link ' + (active =='gaming' ? 'active' : '') } onClick={()=>Changestab('gaming')}>
                    <Link to='/' replace='false'>                                                    
                        <svg viewBox="0 0 28 28" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv" height="28" width="28">
                            <path d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z">                                    
                            </path>
                        </svg>
                    </Link>
                </li>          
                <li className={'link ' + (active =='menu' ? 'active' : '') } onClick={()=>Changestab('menu')}>
                    <Link to='/about' replace='false'>                                                          
                        <i class='facebookCatalog my-auto'></i>
                    </Link>
                </li>
                <div className='stick-active'></div>
            </ul>
            <div className='ml-auto mr-3 py-2 nav-right-links'> 
                <div className="Name mr-3">
                    <Link to='/about' title='Name'>
                        <img src={require('../images/avatar.jpg').default} alt="" className='mr-2'/>                    
                    </Link>                
                    <p className='mt-auto'>
                        <b>
                            Đạt
                        </b>
                    </p>
                </div>
                <Link className='link' title='Menu'>
                    <i className='facebookMenu'></i>
                </Link>           
                <Link className='link' title='Messenger'>
                    <svg viewBox="0 0 28 28" alt="" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry" height="20" width="20">
                        <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
                    </svg>
                </Link>   
                <Link className='link' title='Thông báo'>
                    <svg viewBox="0 0 28 28" alt="" class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry" height="20" width="20"><path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
                    </svg>
                </Link>   
                <Link className='link' title='Tài khoản'>
                    <i className='facebookBell'></i>
                </Link>     
            </div>
        </nav>
    );    
}
export default Navbardesktop;