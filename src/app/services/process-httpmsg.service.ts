import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/observable/throw';

@Injectable()
export class ProcessHttpmsgService {

  constructor() { }

  public extraiDado(resposta: Response) {
    let saida = resposta.json();
    return saida || { };
  }

  public extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  public handleErro(erro: Response | any) {
    let errMsg: string;

    if (erro instanceof Response) {
      const body = erro.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${erro.status} - ${erro.statusText || ''} ${err}`;
    } else {
      errMsg = erro.message ? erro.message : erro.toString();
    }
    return Observable.throw(errMsg);
  }
}
