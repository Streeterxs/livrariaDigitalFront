import React from 'react';

import { IBook } from '../IBook';
import './Book.scss'
import { Categorias } from '../Categorias';

const book = (props: IBook) => {
    return (
        <div className="col-12 col-md-4">
            <div className="card cardColor">
                {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                <div className="card-body">
                    <h3 className="card-title">{props.nome}</h3>
                    <h5>Ano: {props.ano}</h5>
                    <h5>Autor: {props.autor}</h5>
                    <h5>Editora: {props.editora}</h5>
                    <h5>Idioma: {props.idioma}</h5>
                    <h5>Páginas: {props.paginas}</h5>
                    <h5>Categorias: </h5>
                    <div className="mx-2">
                        {
                            props.categorias.map((categoria, index) => <p className="m-0" key={index}>{Categorias[+categoria]}</p>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default book;