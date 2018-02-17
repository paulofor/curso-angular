import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<Leader[]> {
    return Observable.of(LEADERS).delay(2000);
  }

  getLeader(pos: number) : Observable<Leader> {
    return Observable.of(LEADERS.filter((item) => (item.id===pos))[0]).delay(2000);
   
  }

  getFeaturedLeader() : Observable<Leader> {
    return Observable.of(LEADERS.filter((item) => (item.featured))[0]).delay(2000);
  }

}
