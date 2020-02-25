import React, { useEffect, useState } from 'react';

import { AxiosResponse } from 'axios';

import Books from './Books';
import { IBook } from './IBook';
import {Books as apiBooks} from '../../../Services';
import { ResponseApi } from '../../../Services/ApiBooks/responseApi';

const BooksContainer = () => {
    const [books, setBooks] = useState();

    useEffect(() => {
        apiBooks.get('/livros').then((books: AxiosResponse<ResponseApi<IBook>>) => {{
            console.log(books.data);
            setBooks(books.data.data);
        }})
    }, [])

    return (
        <div className="mx-3">
            <Books books={books}></Books>
        </div>
    )
};

export default BooksContainer;