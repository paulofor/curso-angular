import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promocao } from '../shared/promocao';
import { PromocaoService } from '../services/promocao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promocao: Promocao;

  constructor(private dishService: DishService, private promocaoService: PromocaoService) { }

  ngOnInit() {
    this.dish = this.dishService.getFeaturedPrato();
    this.promocao = this.promocaoService.getFeaturedPromocao();

  }

}
