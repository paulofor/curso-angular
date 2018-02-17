import { Injectable } from '@angular/core';

import { Promocao } from '../shared/promocao';
import { PROMOCOES } from '../shared/promocoes';

@Injectable()
export class PromocaoService {

  constructor() { }

  getPromoces(): Promise<Promocao[]> {
    return Promise.resolve(PROMOCOES);
  }

  getPromocao(pos: number) : Promise<Promocao> {
    return Promise.resolve(PROMOCOES.filter((item) => (item.id===pos))[0]);
  }

  getFeaturedPromocao() : Promise<Promocao> {
    return Promise.resolve(PROMOCOES.filter((item) => (item.featured))[0]);
  }
}
