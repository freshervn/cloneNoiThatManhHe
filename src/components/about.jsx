import React, { Component } from 'react';
import NavAbout from "./navabout";
import { Link } from 'react-router-dom';
import WriteStatus from './box-status';
import Status from './status';
import '../style/about.scss';
class About extends Component {
    state = {
        active:'pending',
        WriteStatus:'false',        
    };
    testting=()=>{
        this.setState({WriteStatus:!this.state.WriteStatus});
        this.setState({active:'active'});
    }
    render() { 
        return (
        <div className='Dat_Info px-xs-3'>
            <NavAbout/>
            <header>
                <div className='banner text-center p-3 py-lg-0'>            
                    <picture>
                        <source media="(min-width:465px)" srcset={require('../images/my-background.jpg').default}/>
                        <div className='background'>
                            <img src={require('../images/my-background.jpg').default } alt="background" className='w-100'/>
                        </div>
                    </picture>
                    <figure className='avatar mb-0'>
                        <img src={require('../images/avatar.jpg').default} alt="avatar"/>                    
                        <figcaption className='pt-3'>
                        <h1 className='Name size-22 mb-0'>                        
                            <b>
                                Bùi Đạt                        
                            </b>
                        </h1>
                        <p className='decription mb-0'>
                            Cá sấu
                        </p>
                        </figcaption>
                    </figure>                                
                </div>            
                <nav className='d-lg-flex flex-wrap py-lg-1 px-lg-5 px-3'>                            
                    <hr className='w-100 my-2 d-none d-lg-block'/>
                    <div className='d-none d-lg-flex justify-content-between  flex-wrap mr-auto size-15'>
                        <Link href='' className='btn py-2 px-3 flex-auto mr-lg-2 hv-btn-white text-secondary'> 
                            <b className=''>
                                Bài viết
                            </b>
                        </Link>            
                        <Link href='' className='btn py-2 px-3 flex-auto mr-lg-2 hv-btn-white text-secondary'> 
                            <b className=''>
                                Giới thiệu
                            </b>
                        </Link>            
                        <Link href='' className='btn py-2 px-3 flex-auto mr-lg-2 hv-btn-white text-secondary'> 
                            <b className=''>
                                Bạn bè 
                            </b> <span>
                                596
                            </span>
                        </Link>                              
                        <Link href='' className='btn py-2 px-3 flex-auto mr-lg-2 hv-btn-white text-secondary'> 
                            <b className=''>
                                Ảnh
                            </b>
                        </Link>                  
                        <Link href='' className='btn py-2 px-3 flex-auto mr-lg-2 hv-btn-white text-secondary'> 
                            <b className=''>
                                Video
                            </b>
                        </Link>            
                        <div class="btn-group">
                            <button type="button" class="btn py-2 px-3 hv-btn-white text-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>
                                    Xem thêm
                                </b>
                            </button>
                            <div class="dropdown-menu p-2 rounded">
                                <a class="dropdown-item rouned p-2" href="#">Check in</a>
                                <a class="dropdown-item rouned p-2" href="#">Thể thao</a>
                                <a class="dropdown-item rouned p-2" href="#">Âm nhạc</a>
                                <a class="dropdown-item rouned p-2" href="#">Phim</a>
                                <a class="dropdown-item rouned p-2" href="#">Sách</a>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between flex-wrap ml-auto my-lg-1'>
                        <a href='https://www.facebook.com/guyfawker4' className='btn bg-lightfb p-1 px-2 mr-lg-2 hv-brightness '>                                                                    
                            <img src={require('../images/icons/facebook-new.png').default } alt="" className='h-1 mr-2'/>
                            <b>
                                Facebook
                            </b>
                        </a>              
                        <a href='https://www.facebook.com/messages/t/100013417411468/' className='btn bg-primary p-1 px-2 mr-lg-2 hv-brightness '>                       
                            <img src={require('../images/icons/messenger.png').default } alt="" className='h-1 mr-2'/>
                            <b className='text-white'>
                                Messager
                            </b>
                        </a>
                        <a href='https://i.topcv.vn/buithanhdat?ref=3916884' className='btn p-0 my-auto hv-brightness '>                       
                            <img src={require('../images/icons/topcv.ico').default } alt="" className='h-2'/>             
                        </a>            
                    </div>              
                    <hr className='w-100 my-2 d-lg-none'/>
                </nav>                
            </header>
            <div className='bg-web-wash'>
                <div className='container p-0 pt-lg-3 px-lg-5'>               
                    <div className='row mx-0'>
                        <aside className='col-lg-4 px-0'>                            
                        <div className='bg-white rounded-lg-1 py-3 shadow'>

                            <div className='px-3'>
                                <p className='size-22 d-none d-lg-block'>
                                    <b>
                                        Giới thiệu
                                    </b>
                                </p>
                                <ul className='list-no-style p-0 size-15-16 mb-0'>
                                    <li className='d-flex'>                                      
                                        <img src={require('../images/icons/home.png').default } alt="" className='h-1 h-lg-2 mr-2 light-mode'/>             
                                        <p className='mb-2'>
                                            Sống tại <b>Hà Nội</b>
                                        </p>
                                    </li>
                                    <li className='d-flex'>                                      
                                        <img src={require('../images/icons/location.png').default } alt="" className='h-1 h-lg-2 mr-2 light-mode'/>             
                                        <p className='mb-2'> 
                                            Đến từ <b>Tuyên Quang</b>
                                        </p>
                                    </li>
                                    <li className='d-flex'>                                      
                                        <img src={require('../images/icons/study.png').default } alt="" className='h-1 h-lg-2 mr-2 light-mode'/>             
                                        <p className='mb-2'> 
                                            Học tập tại <b>w3schools</b>
                                        </p>
                                    </li>
                                    <li className='d-flex'>                                      
                                        <img src={require('../images/icons/work.png').default } alt="" className='h-1 h-lg-2 mr-2 light-mode'/>             
                                        <p className='mb-2'> 
                                            Làm việc tại <b>Fago Group</b>
                                        </p>
                                    </li>
                                    <li className='d-flex'>                                      
                                        <img src={require('../images/icons/relationship.png').default } alt="" className='h-1 h-lg-2 mr-2 light-mode'/>             
                                        <p className='mb-2'> 
                                            độc thân
                                        </p>
                                    </li>
                                </ul>
                            </div>                
                            <div className='px-3'>
                                <ul className='list-no-style row px-0 mx-0 mb-0'>
                                    <li className='rounded-pill bg-whitesmoke py-1 px-3 mr-2 mb-2'>
                                    📖 <b>
                                            Đọc sách
                                        </b>
                                    </li>
                                    <li className='rounded-pill bg-whitesmoke py-1 px-3 mr-2 mb-2'>
                                    🍕️ <b>
                                            Ăn uống
                                        </b>
                                    </li>
                                    <li className='rounded-pill bg-whitesmoke py-1 px-3 mr-2 mb-2'>
                                    💤 <b>
                                            Ngủ
                                        </b>
                                    </li>
                                    <li className='rounded-pill bg-whitesmoke py-1 px-3 mr-2 mb-2'>
                                    🎧 <b>
                                            Nghe nhạc
                                        </b>
                                    </li>
                                    <li className='rounded-pill bg-whitesmoke py-1 px-3 mr-2 mb-2'>
                                    🎮 <b>
                                            Trò chơi điện tử
                                        </b>
                                    </li>
                                </ul>
                                <hr className='my-0'/>                            
                            </div>                               
                        </div>
                        </aside>                
                        <main className='col-lg-8 pr-lg-0 px-0 px-md-3'>
                            <div className='bg-white rounded-lg-1 shadow p-lg-3 mb-3'>
                                <div className='d-flex px-3 p-lg-0'>                                    
                                    <WriteStatus/>     
                                </div>
                                <hr className='my-2'/>
                                <div className='d-flex'>
                                    <button className='w-100 btn size-14 d-lg-none'>
                                        <img class="mr-1" src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/OR6SzrfoMFg.png" alt="" height="14" width="14"></img>
                                        <span>write post</span>
                                    </button>
                                    <span className='py-1 d-lg-none'>|</span>
                                    <button className='w-100 btn d-lg-none'>
                                        <i className='facebookPhoto mr-1'></i>
                                        <span>
                                            share photo
                                        </span>
                                    </button>
                                    <button className='flex-auto btn hv-btn-white d-none d-lg-flex'>
                                        <i className='facebookPhoto2 mr-2'></i>
                                        <b className='my-auto fb-secondary-color size-15'>
                                            Ảnh/Video
                                        </b>
                                    </button>
                                    <button className='flex-auto btn hv-btn-white d-none d-lg-flex'>
                                        <i className='facebookTag mr-2'></i>
                                        <b className='my-auto fb-secondary-color size-15'>
                                            Gắn thẻ bạn bè
                                        </b>
                                    </button>
                                    <button className='flex-auto btn hv-btn-white d-none d-lg-flex'>
                                        <i className='facebookEmotion mr-2'></i>
                                        <b className='my-auto fb-secondary-color size-15'>
                                            Cảm xúc/Hoạt động
                                        </b>
                                    </button>                                    
                                </div>
                            </div>                       
                            <Status/>
                        </main>                
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
export default About;