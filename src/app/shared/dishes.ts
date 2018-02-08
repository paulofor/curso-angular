import { Dish } from "./dish";


export const  PRATOS : Dish[] = [
    {
    id:0,
    nome:'Uthappizza',
    imagem: '/assets/images/uthappizza.png',
    categoria: 'mains',
    rotulo:'Hot',
    preco:'4.99',
    featured: true,
    descricao:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.' ,                       
    comentario: []
    },
   {
    id:1,
    nome:'Zucchipakoda',
    imagem: '/assets/images/zucchipakoda.png',
    categoria: 'appetizer',
    rotulo:'',
    preco:'1.99',
    featured: false,
    descricao:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce' ,
    comentario: []                        
    },
   {
    id:2,
    nome:'Vadonut',
    imagem: '/assets/images/vadonut.png',
    categoria: 'appetizer',
    rotulo:'New',
    preco:'1.99',
    featured: false,
    descricao:'A quintessential ConFusion experience, is it a vada or is it a donut?',
    comentario: []                        
    },
   {
    id:3,
    nome:'ElaiCheese Cake',
    imagem: '/assets/images/elaicheesecake.png',
    categoria: 'dessert',
    rotulo:'',
    preco:'2.99',
    featured: false,
    descricao:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms' ,
    comentario: []                       
    }
   ];