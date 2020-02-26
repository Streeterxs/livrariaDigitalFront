import React from 'react';

import {Books as Books} from '../../../Services'
import BookForm from './BookForm';
import { IBook } from '../List/IBook';

const bookCreation = () => {

    const handleFormSubmit = (book: IBook) => {
        Books.post('/livros', book).then(book => {
            console.log(book);
        })
    }

    return (
        <BookForm formSubmit={handleFormSubmit}/>
    );
}

export default bookCreation;