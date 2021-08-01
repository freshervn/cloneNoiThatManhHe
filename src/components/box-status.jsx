import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/writeStatus.scss';
function WriteStatus() {   
    const [display,setState]=useState(false);
    function changedisplay() {
        setState(predisplay => !predisplay);                
    }
    return(
        <React.StrictMode>
            <Link to='/about' title='Name'>
                <img src={require('../images/avatar.jpg').default} alt="" className='square40 rounded-circle mr-2 mr-lg-3'/>                    
            </Link>                
            <p className='my-auto bg-web-wash px-3 py-2 w-100 rounded-pill text-secondary' onClick={changedisplay}>
                Viết gì đó cho Đạt...                                        
            </p>
            <div className={'WriteStatus'+ (display==false ? ' d-none':'')}>
                <div className='status_area'>
                    <nav className='d-flex justify-content-between border-bottom  px-3 w-100'>
                        <button to='/' className='btn bg-transparent pl-0 d-lg-none' onClick={changedisplay}>
                            <i className='facebookClose'></i>
                        </button>
                        <h5 className='size-24 my-auto'>
                            <b>
                                Create Post
                            </b>
                        </h5>
                        <label className="search btn my-auto p-0 d-lg-none">
                            <b className='text-secondary'>
                                Post
                            </b>
                        </label>
                        <button to='/' className='btn bg-web-wash d-none d-lg-inline-block rounded-circle closedesk p-2' onClick={changedisplay}>
                            <i className='facebookClose'></i>
                        </button>
                    </nav>
                    <div className='px-3 pt-3 pb-0 flex-column d-flex bg-white flex-auto flex-lg-none'>
                        <div className='d-flex'>
                            <Link to='/about' title='Name'>
                                    <img src={require('../images/avatar.jpg').default} alt="" className='mr-2 rounded-circle avatar'/>                    
                            </Link>                
                            <div>
                                <p className='mb-0 size-15-14'>
                                    <b>
                                        Bùi Đạt
                                    </b>
                                </p>
                                <div className='d-flex flex-wrap'>                            
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle px-1 py-0 border rounded mr-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                                                
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/H8GWr17BZ_T.png" alt="Bạn bè ngoại trừ..." height="12" width="12"/>
                                            <b>
                                                Bạn bè
                                            </b>
                                        </button>                              
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle px-1 py-0 border rounded mr-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                                                
                                            <i className='facebookPlush12'></i>
                                            <b>
                                                Album
                                            </b>
                                        </button>                              
                                    </div>
                                </div>
                            </div>
                        </div>
                        <textarea className='border-0 outline-0 pt-3'  name="" id="" cols="30" rows="10" placeholder='Bạn đang nghĩ gì'>
                        </textarea>
                        <div className='mt-auto' >
                        <img className='h-lg-40 mb-lg-4' height="32" width='auto' alt="" referrerpolicy="origin-when-cross-origin" src={require('../images/icons/SATP_Aa_square-2x.png').default}></img>                    
                        </div>
                    </div>
                    <div className='px-lg-3 mt-3 mt-auto'>
                        <div className='tags d-flex justify-content-between rounded-top-2 w-100  mt-lg-0 px-2 bg-white'>                   
                            <p className='d-none d-lg-inline-block mr-auto my-auto'>
                                <b>
                                    Thêm vào bài viết
                                </b>
                            </p>
                            <button className='btn hv-btn-white'>
                                <i className='facebookMic'></i>
                            </button>
                            <button className='btn hv-btn-white'>
                                <i className='facebookPhoto2 mr-2'></i>
                            </button>
                            <button className='btn hv-btn-white'>
                                <i className='facebookTag mr-2'></i>
                            </button>
                            <button className='btn hv-btn-white'>
                                <i className='facebookEmotion mr-2'></i>
                            </button>     
                            <button className='btn hv-btn-white'>
                                <i className='facebookPosition mr-2'></i>
                            </button>          
                        </div>
                        <button className='btn w-100 btn-primary mt-3 d-none d-lg-inline-block'>
                            <b>
                                Đăng
                            </b>
                        </button>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    );
}
export default WriteStatus;