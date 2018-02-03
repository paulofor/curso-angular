import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-pratodetalhe',
  templateUrl: './pratodetalhe.component.html',
  styleUrls: ['./pratodetalhe.component.scss']
})
export class PratodetalheComponent implements OnInit {

  @Input()
  pratoSelecionado : Dish;

  constructor() { }

  ngOnInit() {
  }

}
