import React, {useState,useEffect} from 'react';
import Books from '../data/myBook.json'
import '../style/gallery.scss';
import '../style/bookItem.scss';
import { Link } from 'react-router-dom';
function Sach ({match}) {      
    console.log(match.params.id)
    return (
            <main className='container-fluid pt-4'>
                <h1 className='size32 mb-3'>
                    test
                </h1>
                <p>
                    đang tắc chưa render dữ liệu ra dc -.-
                </p>
            {/* <dl className='my-gallery'>
                {Books.map((book) =>                                        
                    <dd key={book.id}>
                        <div className='books-item'>
                            <Link to={`/sach/${book.id}`} >
                            <img src={book.images} alt={book.name} className='w-100'/>                               
                            </Link>
                        </div>
                    </dd>
                )}
            </dl>                     */}
        </main>
    );    
}
 
export default Sach;