import React, { Component } from 'react';
import Banner from './Banner';
import Miniproduct from './Banner';
class Home extends Component {
    state = {}
    render() { 
        return ( 
            <React.StrictMode>
                <Banner/>
                <main className='container'>                
                {/* <Miniproduct/> */}
                </main>
           </React.StrictMode>
        );
    }container
}
 
export default Home;