import React, { useState, FormEvent, ChangeEvent } from 'react';

import './BookForm.scss';

interface BookForm {
    nome: string;
    autor: string;
    editora: string;
    idioma: string;
    paginas: number;

}

const BookForm = (props: any) => {
    const [book, setBook] = useState({
        nome: '',
        autor: '',
        editora: '',
        idioma: '',
        paginas: ''
    });

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {

        const target = event.currentTarget;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(book);
        setBook({
            ...book,
            [name]: value,
        } as any);
        console.log(book);
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(event);
        props.formSubmit(book);
    }

    return (
        <div className="m-4 p-4 boxShadow">
            <h2>Formulario</h2>
            <form className="d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
                <div className="row width90">
                    <div className="form-group col-12 col-md-12">
                        <label htmlFor="nomeLivro"><b>Nome do Livro</b></label>
                        <input type="text" name="nome" onChange={handleInputChange} className="form-control" id="nomeLivro" placeholder="A Menina que Roubava Livros" required/>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="autorLivro"><b>Autor</b></label>
                        <input type="text" name="autor" onChange={handleInputChange} className="form-control" id="autorLivro" placeholder="Markus Zusak" required/>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="editoraLivro"><b>Editora</b></label>
                        <input type="text" name="editora" onChange={handleInputChange} className="form-control" id="editoraLivro" placeholder="A - Intrinseca" required/>
                    </div>
                    <div className="form-group col-12 col-md-3">
                        <label htmlFor="idiomaLivro"><b>Idioma</b></label>
                        <input type="text" name="idioma" onChange={handleInputChange} className="form-control" id="idiomaLivro" placeholder="Português" required/>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="anoLivro"><b>Email address</b></label>
                        <input type="number" name="ano" onChange={handleInputChange} className="form-control" id="anoLivro" placeholder="name@example.com" required/>
                    </div> */}
                    <div className="form-group col-12 col-md-3">
                        <label htmlFor="paginasLivro"><b>Páginas</b></label>
                        <input type="number" name="paginas" onChange={handleInputChange} className="form-control" id="paginasLivro" placeholder="480" required/>
                    </div>

                    <button type="submit" className="btn btn-secondary w-100 my-4">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default BookForm;