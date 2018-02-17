import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getPratos(): Promise<Dish[]> {
    return Promise.resolve(PRATOS);
  }

  getPrato(pos: number) : Promise<Dish> {
    return Promise.resolve(PRATOS.filter((dish) => (dish.id===pos))[0]);
  }

  getFeaturedPrato() : Promise<Dish> {
    return Promise.resolve(PRATOS.filter((dish) => (dish.featured))[0]);
  }
}
  