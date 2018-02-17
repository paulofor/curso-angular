import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promocao } from '../shared/promocao';
import { PromocaoService } from '../services/promocao.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promocao: Promocao;
  leader: Leader;

  constructor(private dishService: DishService, 
                private promocaoService: PromocaoService,
                private leaderService: LeaderService) { }

  ngOnInit() {
    this.dishService.getFeaturedPrato().
      subscribe(dish => this.dish = dish);
    this.promocaoService.getFeaturedPromocao()
      .subscribe(promocao => this.promocao = promocao);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader);

  }

}
