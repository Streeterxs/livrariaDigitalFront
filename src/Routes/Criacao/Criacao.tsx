import React from 'react';

import {BookCreation as BookCreation} from '../../Components/Books';

import Aux from '../../Hoc/Aux';
const criacao = () => (
    <Aux>
        <h1>Registro de Livros</h1>
        <BookCreation/>
    </Aux>
);

export default criacao;