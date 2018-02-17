import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class DishService {

  constructor() { }

  getPratos(): Observable<Dish[]> {
    return Observable.of(PRATOS).delay(2000);
    
  }

  getPrato(pos: number) : Observable<Dish> {
    return Observable.of(PRATOS.filter((dish) => (dish.id===pos))[0]).delay(2000);
  }

  getFeaturedPrato() : Observable<Dish> {
    return Observable.of(PRATOS.filter((dish) => (dish.featured))[0]).delay(2000);
  
  }
}
  