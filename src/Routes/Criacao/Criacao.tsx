import React from 'react';

import {BookCreation as BookCreation} from '../../Components/Books';

import Aux from '../../Hoc/Aux';
const criacao = () => (
    <Aux>
        <h1>Criação component!</h1>
        <BookCreation/>
    </Aux>
);

export default criacao;