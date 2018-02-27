import { Injectable } from '@angular/core';

import { Promocao } from '../shared/promocao';
import { PROMOCOES } from '../shared/promocoes';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { Http, Response } from '@angular/http';
import { baseUrl } from '../shared/baseurl';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class PromocaoService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  getPromoces(): Observable<Promocao[]> {
    return this.http.get(baseUrl + 'promotions')
        .map(res => { return this.processHTTPMsgService.extractData(res); });
  }

  getPromocao(pos: number) : Observable<Promocao> {
    return  this.http.get(baseUrl + 'promotions/' +pos)
        .map(res => { return this.processHTTPMsgService.extraiDado(res); });
  }

  getFeaturedPromocao() : Observable<Promocao> {
    return this.http.get(baseUrl + 'promotions?featured=true')
        .map(res => { return this.processHTTPMsgService.extraiDado(res)[0]; });
  }
}
