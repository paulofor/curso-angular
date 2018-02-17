import { Injectable } from '@angular/core';

import { Promocao } from '../shared/promocao';
import { PROMOCOES } from '../shared/promocoes';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromocaoService {

  constructor() { }

  getPromoces(): Observable<Promocao[]> {
    return Observable.of(PROMOCOES).delay(2000);
  }

  getPromocao(pos: number) : Observable<Promocao> {
    return Observable.of(PROMOCOES.filter((item) => (item.id===pos))[0]).delay(2000);
  }

  getFeaturedPromocao() : Observable<Promocao> {
    return Observable.of(PROMOCOES.filter((item) => (item.featured))[0]).delay(2000);
  }
}
