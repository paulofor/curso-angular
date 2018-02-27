import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { PRATOS } from '../shared/dishes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

import { Http, Response } from '@angular/http';
import { baseUrl } from '../shared/baseurl';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable()
export class DishService {

  constructor(private http: Http,
            private processHTTPMsgService: ProcessHttpmsgService) { }

  getPratos(): Observable<Dish[]> {
    return this.http.get(baseUrl + 'dishes')
        .map(res => { return this.processHTTPMsgService.extractData(res); })
        .catch(error=> { return this.processHTTPMsgService.handleErro(error); });
  }

  getPrato(pos: number) : Observable<Dish> {
    return  this.http.get(baseUrl + 'dishes/' +pos)
        .map(res => { return this.processHTTPMsgService.extraiDado(res); })
        .catch(error=> { return this.processHTTPMsgService.handleErro(error); });
  }

  getFeaturedPrato() : Observable<Dish> {
    return this.http.get(baseUrl + 'dishes?featured=true')
        .map(res => { return this.processHTTPMsgService.extraiDado(res)[0]; })
        .catch(error=> { return this.processHTTPMsgService.handleErro(error); });
  }

  getPratoIds() : Observable<number[]> {
    return this.getPratos()
        .map(dishes => { return dishes.map(dish => dish.id) });
         
  }

 
}
  