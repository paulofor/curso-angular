import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pratos: Dish[] = [
    {
    nome:'Uthappizza',
    imagem: '/assets/images/uthappizza.png',
    categoria: 'mains',
    rotulo:'Hot',
    preco:'4.99',
    descricao:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
   {
    nome:'Zucchipakoda',
    imagem: '/assets/images/zucchipakoda.png',
    categoria: 'appetizer',
    rotulo:'',
    preco:'1.99',
    descricao:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
   {
    nome:'Vadonut',
    imagem: '/assets/images/vadonut.png',
    categoria: 'appetizer',
    rotulo:'New',
    preco:'1.99',
    descricao:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
   {
    nome:'ElaiCheese Cake',
    imagem: '/assets/images/elaicheesecake.png',
    categoria: 'dessert',
    rotulo:'',
    preco:'2.99',
    descricao:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
   ];

  

  constructor() { }

  ngOnInit() {
  }

}
