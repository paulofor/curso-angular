import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish'
import { PRATOS } from '../shared/dishes'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  pratos: Dish[] = PRATOS;

  pratoEscolhido: Dish = PRATOS[0];

  constructor() { }

  ngOnInit() {
  }

  onSelect(valor: Dish) {
    this.pratoEscolhido = valor;
  }

}
