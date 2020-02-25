import React from 'react';

import Aux from '../../Hoc/Aux';
import {BooksContainer as BooksContainer} from '../../Components/Books';

const home = () => (
    <Aux>
        <div>
            <h1>Bem vindo!</h1>
            <h3>Estes são os livros cadastrados: </h3>
        </div>
        <BooksContainer/>
    </Aux>
);

export default home;