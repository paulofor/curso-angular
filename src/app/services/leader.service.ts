import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    return Promise.resolve(LEADERS);
  }

  getLeader(pos: number) : Promise<Leader> {
    return Promise.resolve(LEADERS.filter((item) => (item.id===pos))[0]);
  }

  getFeaturedLeader() : Promise<Leader> {
    return Promise.resolve(LEADERS.filter((item) => (item.featured))[0]);
  }

}
