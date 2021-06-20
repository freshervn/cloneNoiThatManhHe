import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

function ItemDetails({match}){
    useEffect(
        ()=>{
            fetchItems()
            console.log(match);
        },[]
    );
    const [items,setItems]= useState([]);
    const fetchItems = async() =>{
        const data = await fetch('https://fortnite-api.com/v1/playlists/Playlist_VK_Play')
        const items= await data.json();    
        setItems(items.data);
    }
    return (
        <main>         
            {items.name}
        </main>
    );
}
export default ItemDetails;