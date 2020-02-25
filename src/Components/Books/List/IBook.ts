import { Edition } from "./Edition";

export interface IBook {
    nome: string;
    autor: string;
    categorias: string[];
    idioma: string;
    editora: string;
    ano: number;
    paginas: number;
    edicoes: Edition[];
    _id: string;
}