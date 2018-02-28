import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'


import { baseUrl } from '../shared/baseurl';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class DishService {

  constructor(private restangular: Restangular,
            private processHTTPMsgService: ProcessHttpmsgService) { }

  getPratos(): Observable<Dish[]> {
    return this.restangular.all('dishes').getList();
  }

  getPrato(pos: number) : Observable<Dish> {
    return this.restangular.one('dishes',pos).get();
  }

  getFeaturedPrato() : Observable<Dish> {
    return this.restangular.all('dishes').getList({featured:true})
        .map(dishes => dishes[0]);
  }

  getPratoIds() : Observable<number[]> {
    return this.getPratos()
        .map(dishes => { return dishes.map(dish => dish.id) });
         
  }

 
}
  