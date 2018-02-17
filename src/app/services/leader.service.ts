import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<Leader[]> {
    //return Promise.resolve(LEADERS);
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS),2000)
    }
    );

  }

  getLeader(pos: number) : Promise<Leader> {
    //return Promise.resolve(LEADERS.filter((item) => (item.id===pos))[0]);
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((item) => (item.id===pos))[0]),2000)
    }
    )
  }

  getFeaturedLeader() : Promise<Leader> {
    //return Promise.resolve(LEADERS.filter((item) => (item.featured))[0]);
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADERS.filter((item) => (item.featured))[0]),2000)
    }
    )
  }

}
