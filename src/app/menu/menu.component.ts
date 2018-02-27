import { Component, OnInit, Inject } from '@angular/core';

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
