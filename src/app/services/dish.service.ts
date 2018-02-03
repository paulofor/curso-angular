import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getPratos(): Dish[] {
    return PRATOS;
  }

}
  