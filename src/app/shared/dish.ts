import { Comentario } from "./comentario"


export class Dish {
    id: number;
    nome: string;
    imagem: string;
    descricao: string;
    preco: string;
    rotulo: string;
    categoria: string;
    featured: boolean;
    comentario: Comentario[];
}

