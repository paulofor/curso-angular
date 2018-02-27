import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { DishService } from '../services/dish.service';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-pratodetalhe',
  templateUrl: './pratodetalhe.component.html',
  styleUrls: ['./pratodetalhe.component.scss']
})
export class PratodetalheComponent implements OnInit {

 
  pratoSelecionado : Dish;
  pratoIds: number[];  
  prev: number;
  next: number;
  mensagemErro: string;

  constructor(private dishservice: DishService, 
      private route: ActivatedRoute,
      private location: Location, @Inject('baseUrl') private baseUrl) { }

  ngOnInit() {
    this.dishservice.getPratoIds().subscribe(ids => this.pratoIds = ids);
    // Quando params altera tudo acontece.
    this.route.params
      .switchMap((params:Params) => this.dishservice.getPrato(+params['id']))   // Retorna um observable
      .subscribe(dish => { this.pratoSelecionado = dish ; this.setPrevNext(dish.id); }
                , errmes => this.mensagemErro = <any>errmes);   // O observable retornnndo e colococado no pratoSelecionado


  }

  setPrevNext(idCorrente: number) {
    let posicao = this.pratoIds.indexOf(idCorrente);
    this.prev = this.pratoIds[(this.pratoIds.length + posicao - 1) % this.pratoIds.length ];
    this.next = this.pratoIds[(this.pratoIds.length + posicao + 1) % this.pratoIds.length ];
  }

  

  goBack(): void {
    this.location.back();
  }

}
