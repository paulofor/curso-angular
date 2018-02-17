import { Injectable } from '@angular/core';

import { Promocao } from '../shared/promocao';
import { PROMOCOES } from '../shared/promocoes';

@Injectable()
export class PromocaoService {

  constructor() { }

  getPromoces(): Promise<Promocao[]> {
    //return Promise.resolve(PROMOCOES);
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOCOES),2000)
    }
    );
  }

  getPromocao(pos: number) : Promise<Promocao> {
    //return Promise.resolve(PROMOCOES.filter((item) => (item.id===pos))[0]);
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOCOES.filter((item) => (item.id===pos))[0]),2000)
    }
    );
  }

  getFeaturedPromocao() : Promise<Promocao> {
    //return Promise.resolve(PROMOCOES.filter((item) => (item.featured))[0]);
    return new Promise(resolve => {
      setTimeout(() => resolve(PROMOCOES.filter((item) => (item.featured))[0]),2000)
    }
    );
  }
}
