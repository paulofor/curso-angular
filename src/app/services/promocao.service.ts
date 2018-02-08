import { Injectable } from '@angular/core';

import { Promocao } from '../shared/promocao';
import { PROMOCOES } from '../shared/promocoes';

@Injectable()
export class PromocaoService {

  constructor() { }

  getPromoces(): Promocao[] {
    return PROMOCOES;
  }

  getPromocao(pos: number) : Promocao {
    return PROMOCOES.filter((item) => (item.id===pos))[0];
  }

  getFeaturedPromocao() : Promocao {
    return PROMOCOES.filter((item) => (item.featured))[0];
  }
}
