import React, { Component } from 'react';
import Books from '../data/myBook.json'
import '../style/gallery.scss';
import '../style/bookItem.scss';
class Sach extends Component {
    state = {  }
    render() {        
        return (
                <main className='container-fluid pt-4'>
                    <h1 className='size32 mb-3'>
                        Sách
                    </h1>
                <dl className='my-gallery'>
                    {Books.map((book) =>                                        
                        <dd key={book.id}>
                            <div className='books-item'>
                                <img src={book.images} alt={book.name} className='w-100'/>
                                <footer>
                                    <h1 className='name'>{book.name}</h1>
                                </footer>
                            </div>
                        </dd>
                    )}
                </dl>                    
            </main>
        );
    }
}
 
export default Sach;