import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

  getPratos(): Promise<Dish[]> {
    //return Promise.resolve(PRATOS);
    return new Promise(resolve => {
      // Simular um delay no servidor de 2 segundos.
      setTimeout(() => resolve(PRATOS),2000)
    }
    );
  }

  getPrato(pos: number) : Promise<Dish> {
    //return Promise.resolve(PRATOS.filter((dish) => (dish.id===pos))[0]);
    return new Promise(resolve => {
      // Simular um delay no servidor de 2 segundos.
      setTimeout(() => resolve(PRATOS.filter((dish) => (dish.id===pos))[0]),2000)
    }
    );
  }

  getFeaturedPrato() : Promise<Dish> {
    //return Promise.resolve(PRATOS.filter((dish) => (dish.featured))[0]);
    return new Promise(resolve => {
      // Simular um delay no servidor de 2 segundos.
      setTimeout(() => resolve(PRATOS.filter((dish) => (dish.featured))[0]),2000)
    }
    );
  }
}
  