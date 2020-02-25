import React, { useState } from 'react';

const BookForm = () => {
    const [book, setBook] = useState();

    const handleInputChange = (event: any) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      setBook({
        [name]: value
      });
    }
    return (
        <form>
            <div className="form-group">
                <label htmlFor="nomeLivro"><b>Nome do Livro</b></label>
                <input type="text" name="nome" onChange={handleInputChange} className="form-control" id="nomeLivro" placeholder="A Menina que Roubava Livros" required/>
            </div>
            <div className="form-group">
                <label htmlFor="autorLivro"><b>Autor</b></label>
                <input type="text" name="autor" onChange={handleInputChange} className="form-control" id="autorLivro" placeholder="Markus Zusak" required/>
            </div>
            <div className="form-group">
                <label htmlFor="idiomaLivro"><b>Idioma</b></label>
                <input type="text" name="idioma" onChange={handleInputChange} className="form-control" id="idiomaLivro" placeholder="Português" required/>
            </div>
            <div className="form-group">
                <label htmlFor="editoraLivro"><b>Editora</b></label>
                <input type="text" name="editora" onChange={handleInputChange} className="form-control" id="editoraLivro" placeholder="A - Intrinseca" required/>
            </div>
            {/* <div className="form-group">
                <label htmlFor="anoLivro"><b>Email address</b></label>
                <input type="number" name="ano" onChange={handleInputChange} className="form-control" id="anoLivro" placeholder="name@example.com" required/>
            </div> */}
            <div className="form-group">
                <label htmlFor="paginasLivro"><b>Páginas</b></label>
                <input type="number" name="paginas" onChange={handleInputChange} className="form-control" id="paginasLivro" placeholder="480" required/>
            </div>
        </form>
    );
}

export default BookForm;