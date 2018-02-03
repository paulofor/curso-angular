import { Comentario } from "./comentario"


export class Dish {
    nome: string;
    imagem: string;
    descricao: string;
    preco: string;
    rotulo: string;
    categoria: string;
    comentario: Comentario[];
}

