import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-pratodetalhe',
  templateUrl: './pratodetalhe.component.html',
  styleUrls: ['./pratodetalhe.component.scss']
})
export class PratodetalheComponent implements OnInit {

 
  pratoSelecionado : Dish;

  constructor(private dishservice: DishService, 
      private route: ActivatedRoute,
      private location: Location) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.pratoSelecionado = this.dishservice.getPrato(id);
  }

  goBack(): void {
    this.location.back();
  }

}
