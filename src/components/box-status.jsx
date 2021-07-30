import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/writeStatus.scss';
function WriteStatus() {
    return(
        <div className='WriteStatus'>
            <nav className='d-flex justify-content-between border-bottom bg-web-wash px-3 '>
                <button to='/' className='btn bg-transparent pl-0'>
                    <i className='facebookClose'></i>
                </button>
                <p className='size-20 my-auto'>
                    <b>
                        Create Post
                    </b>
                </p>
                <label className="search btn my-auto p-0">
                    <b className='text-secondary'>
                        Post
                    </b>
                </label>
            </nav>
            <div className='p-3'>
                <div className='d-flex'>
                    <Link to='/about' title='Name'>
                            <img src={require('../images/avatar.jpg').default} alt="" className='mr-2 h-2 rounded-circle'/>                    
                    </Link>                
                    <div>
                        <p className='mb-0 size-14'>
                            <b>
                                Bùi Đạt
                            </b>
                        </p>
                        <div className='d-flex flex-wrap'>                            
                            <div class="dropdown">
                                <button class="btn dropdown-toggle px-1 py-0 border rounded mr-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                                                
                                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/H8GWr17BZ_T.png" alt="Bạn bè ngoại trừ..." height="12" width="12"/>
                                    <b className='size-10 fb-secondary-color'>
                                        Bạn bè
                                    </b>
                                </button>                              
                            </div>
                            <div class="dropdown">
                                <button class="btn dropdown-toggle px-1 py-0 border rounded mr-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                                                
                                    <i className='facebookPlush12'></i>
                                    <b className='size-10 fb-secondary-color'>
                                        Album
                                    </b>
                                </button>                              
                            </div>
                        </div>
                    </div>
                </div>
                <textarea className='border-0 outline-0 pt-3'  name="" id="" cols="30" rows="10" placeholder='Bạn đang nghĩ gì'>
                </textarea>
            </div>
        </div>
    );
}
export default WriteStatus;