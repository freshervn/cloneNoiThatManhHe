import React from 'react';
import {Link} from 'react-router-dom';
import Post from '../data/mypost.json'
import '../style/Status.scss';
function Status(){    
    return ( 
        <div>
        {Post.map(
            (post)=>                       
                <section className='bg-white rounded-lg-1 shadow  Status mb-3'>
                    <header className='d-flex w-100 p-3'>
                        <Link to='/about' title='Name'>
                            <img src={require('../images/avatar.jpg').default} alt="" className='square40 rounded-circle mr-2 mr-lg-3'/>                    
                        </Link>         
                        <div className='flex-auto'>
                            <p className='mb-0 size-15'>
                                <b>
                                Bùi Đạt
                                </b>
                            </p>    
                            <p className='mb-0 size-13 fb-secondary-color' >
                                <span className='mr-1'>Hôm qua lúc 01:24</span>
                            <img className='mb-1' src="https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/H8GWr17BZ_T.png" alt="Bạn bè ngoại trừ..." height="12" width="12"></img>
                            </p>
                        </div>
                        <div>
                            <button className='btn hv-btn-white rounded-circle btn-40'>
                                <i className='facebookThreeDots '></i>
                            </button>
                        </div>
                    </header>                
                    <main>
                        <p className='px-3 size-15 mb-0'>
                            {post.content}
                        </p>
                        <hr className='my-1'/>
                        <img className='w-100' src={post.images} alt=""/>
                    </main>
                    <footer className='px-3'>
                        <hr className='my-1 d-lg-none'/>
                        <div className='d-flex w-100 justify-content-between'>
                            <button className='btn p-1 py-lg-1 hv-btn-white-2 d-flex flex-auto justify-content-center'>
                                <i className='facebooklikeblack mr-2 my-auto fb-filter-secone-icon'></i>                           
                                <b className='my-auto size-15-10 fb-filter-secone-icon'>
                                Thích
                                </b>
                            </button>
                            <span className='mx-2'></span>
                            <button className='btn p-1 py-lg-1 hv-btn-white-2  d-flex flex-auto justify-content-center'>
                                <i className='facebookCommentBlack mr-2 my-auto fb-filter-secone-icon'></i>                           
                                <b className='my-auto size-15-10 fb-filter-secone-icon'>
                                Bình luận
                                </b>
                            </button>

                            <span className='mx-2'></span>
                            <button className='btn p-1 py-lg-1 hv-btn-white-2  d-flex flex-auto justify-content-center'>
                                <i className='facebookShareBlack mr-2 my-auto fb-filter-secone-icon'></i>                           
                                <b className='my-auto size-15-10 fb-filter-secone-icon'>
                                Chia sẻ 
                                </b>
                            </button>
                        </div>
                        <hr className='my-1 '/>
                        <div className='d-none w-100 pb-2 d-lg-flex'>
                            <Link to='/about' title='Name'>
                                <img src={require('../images/avatar.jpg').default} alt="" className='square40 rounded-circle mr-2 mr-lg-3'/>                    
                            </Link>                
                            <p className='my-auto bg-web-wash px-3 py-2 w-100 rounded-pill text-secondary' >
                                Viết Bình luận..                                        
                            </p>
                        </div>
                    </footer>
                </section>     
             )}  
        </div>                 
    );    
}
 
export default Status;