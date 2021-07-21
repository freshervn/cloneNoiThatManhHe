import React, { Component } from 'react';
import DAT_SKills from './DAT_SKills';
import Miniproduct from './DAT_SKills';
class Home extends Component {
    state = {}
    render() { 
        return ( 
            <React.StrictMode>
                <DAT_SKills/>
                {/* <p>Thiết kế CV</p>
                <p>tông hợp các mục đã đã có</p>
                <p>làm chức năng đa ngôn ngữ</p>
                <p>html</p>
                <p>css</p>
                <p>javascript</p>
                <p>reponsive</p>
                <p>làm việc nhóm</p>
                <p>UX/UI</p>
                <p>ci/co</p>
                <p>API</p>
                <p>aJax</p>                 */}
                <main className='container'>                
                {/* <Miniproduct/> */}
                </main>
           </React.StrictMode>
        );
    }container
}
 
export default Home;