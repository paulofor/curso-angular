import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getPratos(): Dish[] {
    return PRATOS;
  }

  getPrato(pos: number) : Dish {
    return PRATOS.filter((dish) => (dish.id===pos))[0];
  }

  getFeaturedPrato() : Dish {
    return PRATOS.filter((dish) => (dish.featured))[0];
  }
}
  