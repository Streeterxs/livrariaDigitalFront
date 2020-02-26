import React, {  } from 'react';

import Book from './Book';
import { IBook } from '../IBook';

const books = (props: {books: IBook[]}) => {
        const arrayLivros = props.books ? props.books.map((book, index) => {
            return <Book {...book} key={index}></Book>
        }) : null
        return(
            <div className="w-100 row">
                {arrayLivros ? arrayLivros : null}
            </div>
        );}

export default books;