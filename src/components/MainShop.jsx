// import React, { useState,useEffect } from 'react';
// import {Link} from 'react-router-dom';

// function MainShop(){
//     useEffect(
//         ()=>{
//             fetchItems()
//         },[]
//     );
//     const [items,setItems]= useState([]);
//     const fetchItems = async() =>{
//         const data = await fetch('https://fortnite-api.com/v1/playlists')
//         const items= await data.json();    
//         setItems(items.data);
//     }
//     return (
//         <main>
//             <h1>Main Shop</h1>
//             {items.map(
//                 item=>(
//                     <h1 key={item.id}>
//                         <Link to={`/shop/${item.id}`}>
//                         {item.name}
//                         </Link>
//                     </h1>
//                 )
//             )}
//         </main>
//     );
// }
// export default MainShop;