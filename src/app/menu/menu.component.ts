import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish'
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pratos: Dish[];

  pratoEscolhido: Dish;

  constructor(private pratoService: DishService) { }

  ngOnInit() {
    this.pratoService.getPratos()
      .then(pratos => this.pratos = pratos);
  }

  onSelect(valor: Dish) {
    this.pratoEscolhido = valor;
  }

}
