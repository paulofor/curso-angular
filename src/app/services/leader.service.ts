import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable()
export class LeaderService {

  constructor() { }

  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(pos: number) : Leader {
    return LEADERS.filter((item) => (item.id===pos))[0];
  }

  getFeaturedLeader() : Leader {
    return LEADERS.filter((item) => (item.featured))[0];
  }

}
