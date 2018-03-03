import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comentario } from '../shared/comentario';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { DishService } from '../services/dish.service';


import 'rxjs/add/operator/switchMap';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { visibility, flyInOut, expand } from '../animations/app.animations';


@Component({
  selector: 'app-pratodetalhe',
  templateUrl: './pratodetalhe.component.html',
  styleUrls: ['./pratodetalhe.component.scss'],
  host: { 
    '[@flyInOut]' : 'true',
    'style' : 'display:block;'
  },
  animations: [
    flyInOut(), visibility(), expand()
  ]
})

export class PratodetalheComponent implements OnInit {

  visibility = 'exibe';
 
  pratoSelecionado : Dish;
  pratoWrk  = null;

  pratoIds: number[];  
  prev: number;
  next: number;

  comment: Comentario;

  mensagemErro: string;
  formErrors = {
    'author':'',
    'comment':''
  };
  validationMessages = {
    'auhtor' : {
      'required':'Author name is required.',
      'minLength':'Author name must be at least 2 characters'
    }, 
    'comment' : {
      'required' : 'Comment is required'
    }
  }

  commentForm: FormGroup;

  constructor(private dishservice: DishService, 
      private route: ActivatedRoute,
      private location: Location, 
      private fb: FormBuilder,
      @Inject('baseUrl') private baseUrl) { }

  ngOnInit() {
    this.createForm();
    this.dishservice.getPratoIds().subscribe(ids => this.pratoIds = ids);
    // Quando params altera tudo acontece.
    this.route.params
      .switchMap((params:Params) => {this.visibility = 'esconde'; return this.dishservice.getPrato(+params['id'])})   // Retorna um observable
      .subscribe(dish => { this.pratoSelecionado = dish ; this.pratoWrk = dish; this.setPrevNext(dish.id); this.visibility = 'exibe'; }
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

  createForm() {
    this.commentForm = this.fb.group({
      author: ['' , [Validators.required, Validators.minLength(2)]],
      rating: 5,
      comment: ['', Validators.required]
    });
    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    console.log(this.comment);
    // Usando o pratoWrk para não perder o atual. Somente quando confirmar a operação no servidor.
    this.pratoWrk.comentario.push(this.comment);
    this.pratoWrk.save()
      .subscribe(dish => this.pratoSelecionado = dish);
    this.commentForm.reset({
      author: '',
      rating: 5,
      comment: ''
    });
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) return;
    const form = this.commentForm;

    for (const campo in this.formErrors) {
        this.formErrors[campo] = '';
        const controle = form.get(campo);
        if (controle && controle.dirty && !controle.valid) {
          const mensagem = this.validationMessages[campo];
          for (const key in controle.errors) {
            this.formErrors[campo] += mensagem[key] + ' ';
          }
        }
    }
  }
}
