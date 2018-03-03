import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promocao } from '../shared/promocao';
import { PromocaoService } from '../services/promocao.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

import { flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { 
    '[@flyInOut]' : 'true',
    'style' : 'display:block;'
  },
  animations: [
    flyInOut(), expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promocao: Promocao;
  leader: Leader;
  erroDish: string;
  erroPromocao: string;
  erroLeader: string;

  constructor(private dishService: DishService, 
                private promocaoService: PromocaoService,
                private leaderService: LeaderService, 
                @Inject('baseUrl') private baseUrl) { }

  ngOnInit() {
    this.dishService.getFeaturedPrato().
      subscribe(dish => this.dish = dish , errmes => this.erroDish = <any>errmes);
    this.promocaoService.getFeaturedPromocao()
      .subscribe(promocao => this.promocao = promocao , errmes => this.erroPromocao = <any>errmes);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader, errmes => this.erroLeader = <any>errmes);

  }

}
