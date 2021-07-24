import React, { Component } from 'react';
import NavAbout from "./navabout";
import { Link } from 'react-router-dom';
import '../style/about.scss';
class About extends Component {
    state = {  }
    render() { 
        return (
        <main className='Dat_Info container px-0 px-xs-3'>
            <NavAbout/>
            <header className='text-center p-3'>            
                <picture>
                    <source media="(min-width:465px)" srcset={require('../images/my-background.jpg').default}/>
                    <div className='background'>
                        <img src={require('../images/my-background.jpg').default } alt="background" className='w-100'/>
                    </div>
                </picture>
                <figure className='avatar mb-0'>
                    <img src={require('../images/avatar.jpg').default} alt="avatar"/>                    
                    <figcaption className='pt-3'>
                    <h1 className='size-22 mb-0'>                        
                        <b>
                            Bùi Đạt                        
                        </b>
                    </h1>
                    <p className='mb-0'>
                        Cá sấu
                    </p>
                    </figcaption>
                </figure>                                
            </header>
            <div className='d-flex justify-content-between px-3 flex-wrap'>
                <a href='https://www.facebook.com/guyfawker4' className='btn bg-lightfb p-1 px-2 flex-auto'>                                                                    
                <img src={require('../images/icons/facebook-new.png').default } alt="" className='h-1 mr-2'/>
                    <b>
                        Facebook
                    </b>
                </a>              
                <a href='https://www.facebook.com/messages/t/100013417411468/' className='btn bg-primary p-1 px-2 '>                       
                    <img src={require('../images/icons/messenger.png').default } alt="" className='h-1 mr-2'/>
                    <b className='text-white'>
                        Messager
                    </b>
                </a>
                <a href='https://i.topcv.vn/buithanhdat?ref=3916884' className='btn p-0 my-auto'>                       
                    <img src={require('../images/icons/topcv.ico').default } alt="" className='h-2'/>             
                </a>            
                <hr className='w-100 my-2'/>
            </div>
            <div className='px-3'>
                <ul className='list-no-style p-0 size-16 mb-0'>
                    <li className='d-flex'>                                      
                        <img src={require('../images/icons/home.png').default } alt="" className='h-1 mr-2 light-mode'/>             
                        <p className='mb-2'>
                            Sống tại <b>Hà Nội</b>
                        </p>
                    </li>
                    <li className='d-flex'>                                      
                        <img src={require('../images/icons/location.png').default } alt="" className='h-1 mr-2 light-mode'/>             
                        <p className='mb-2'> 
                            Đến từ <b>Tuyên Quang</b>
                        </p>
                    </li>
                    <li className='d-flex'>                                      
                        <img src={require('../images/icons/study.png').default } alt="" className='h-1 mr-2 light-mode'/>             
                        <p className='mb-2'> 
                            Học tập tại <b>w3schools</b>
                        </p>
                    </li>
                    <li className='d-flex'>                                      
                        <img src={require('../images/icons/work.png').default } alt="" className='h-1 mr-2 light-mode'/>             
                        <p className='mb-2'> 
                            Làm việc tại <b>Fago Group</b>
                        </p>
                    </li>
                    <li className='d-flex'>                                      
                        <img src={require('../images/icons/relationship.png').default } alt="" className='h-1 mr-2 light-mode'/>             
                        <p className='mb-2'> 
                            độc thân
                        </p>
                    </li>
                </ul>
            </div>                
            <div className='px-3'>
                <ul className='list-no-style row px-0 mx-0'>
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
            </div>
            {/* <section>
                <h2 className='size-16'>
                    <b>
                        Giới thiệu :
                    </b>
                </h2>
                <p className='mb-4 text-justify'>
                    Mình không đam mê code đâu, tại số giời cứ đùn đẩy ấy nên là phải theo thôi.
                    Chứ ước muốn của mình là trở thành ông nội chợ, ở nhà nấu cơm, chơi đàn, vẽ tranh, sáng tạo nghệ thuật... 
                    Nhưng mà phải thôi phải học code đã, để kiếm nhiều tiền, xong khởi nghiệp, rồi bán hết tất cả về nhà tận hưởng cuộc sống ông nội chợ!
                </p>
                <h3 className='size-16'>
                    <b>
                    Giới Tính:
                    </b>
                </h3>
                <p className='mb-4 text-justify'>Mình giới NAM, nhưng vì bị phái nữ cho lụy tình hơi nhiều, nên là mình cũng rất quan tâm đến các bạn trai thẳng khác</p>              
                <h3 className='size-16'>
                    <b>
                        Tuổi: 
                    </b>
                </h3>
                <p className='mb-4 text-justify'> 
                    Ờm thì mình tuổi Tý, có chút lươn lẹo. Mình không biết lúc nào nói mình nói thật, lúc nào mình nói xạo đâu. Nên là mình nói cái gì thì bạn chỉ tin một nửa thôi.
                </p>                                
            </section>            
            <section>
                <h2>Quy tắc</h2>
                <p>
                    <u>
                        <b>
                            Não : 
                        </b>                        
                    </u>
                    &nbsp;não sinh ra là để tuy duy tìm ra cách giải quyết vấn đề đề cuộc sống tốt hơn. Không bao giờ được để não có suy nghĩ tiêu cực.                                        
                </p>
                <p>
                    <u>
                        <b>
                            Sự thật :
                        </b>     
                    </u>
                    &nbsp;sự thật thì không thể thay đổi, chỉ có một cách là chấp nhận sự thật thôi.                    
                </p>
                <p>
                    <u>
                        <b>
                            Cảm xúc :
                        </b>     
                    </u>
                    &nbsp;mình cho phép bản thân được buồn bã, vui vẻ, tức giận hay bối rối..., vì rốt cuộc mình có gen của con người, nghĩa là mình cũng có cảm xúc như bao người bình thường khác.
                    Mình không phải tỏ ra khuyết tật tính cách bằng việc không cho bản thân khóc lóc một chút, hay không được cười cùng bạn bè.
                </p>
                <p>
                    <u>
                        <b>
                        Bạn thận :
                        </b>
                    </u>
                    &nbsp;là đứa đến ăn sinh nhật mình.  
                </p>
                <p>
                    <u>
                        <b>
                        Sát thủ :
                        </b>
                    </u>
                    &nbsp;Luôn có kế hoạch dự phòng.  
                </p>
                <p>
                    <u>
                        <b>
                        Doanh nhân :
                        </b>
                    </u>
                    &nbsp;bán gì thì bán, tình cảm là thứ không được bán.  
                </p>
                <p>
                    <u>
                        <b>
                        Tướng :
                        </b>
                    </u>
                    &nbsp;Đánh bại tướng thì làm tướng.  
                </p>
            </section> */}
        </main>
        );
    }
}
 
export default About;