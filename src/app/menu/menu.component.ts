import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish'
import { DishService } from '../services/dish.service';
import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: { 
    '[@flyInOut]' : 'true',
    'style' : 'display:block;'
  },
  animations: [
    flyInOut(), expand()
  ]
})
export class MenuComponent implements OnInit {

  pratos: Dish[];
  pratoEscolhido: Dish;
  mensagemErro:string;

  constructor(private pratoService: DishService,
    @Inject('baseUrl') private baseUrl) { }

  ngOnInit() {
    this.pratoService.getPratos()
      .subscribe(pratos => this.pratos = pratos, errmes => this.mensagemErro = <any>errmes);
  }

  onSelect(valor: Dish) {
    this.pratoEscolhido = valor;
  }

}
