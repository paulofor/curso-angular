import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

 
  
  feedbackFormGroup: FormGroup;  
  feedback: Feedback;
  listaTipo = ContactType;
  formErros = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email' : ''
  }
  validacaoMensagens = {
    'firstname' : {
      'required' : 'Primeiro nome obrigatorio',
      'minlength' : 'Campo não pode ser inferior a 2 caracteres',
      'maxlength' : 'Campo não pode ser superior a 25 caracteres'
    }, 
    'lastname' : {
      'required' : 'Ultimo nome obrigatorio',
      'minlength' : 'Campo não pode ser inferior a 2 caracteres',
      'maxlength' : 'Campo não pode ser superior a 25 caracteres'
    }, 
    'telnum' : {
      'required' : 'Telefone obrigatorio',
      'pattern' : 'Telefone invalido',
    },
    'email' : {
      'required' : 'Email obrigatorio',
      'email' : 'Email invalido',
    }
  }

  constructor(private fb: FormBuilder) { 
    this.createForm(); 
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackFormGroup = this.fb.group({
        firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25) ]],
        lastname: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(25) ]],
        telnum: [0, [Validators.required, Validators.pattern  ] ],
        email: ['', [Validators.required, Validators.email ]  ],
        agree: false,
        contact: 'Nenhum',
        message: ''
    })

    this.feedbackFormGroup.valueChanges
      .subscribe(data => this.onValueChanged(data) );
    
    this.onValueChanged();  // reset
  }

  onValueChanged(data?:any) {
    if (!this.feedbackFormGroup) return;
    const form = this.feedbackFormGroup;

    for (const campo in this.formErros) {
        this.formErros[campo] = '';
        const controle = form.get(campo);
        if (controle && controle.dirty && !controle.valid) {
          const mensagem = this.validacaoMensagens[campo];
          for (const key in controle.errors) {
            this.formErros[campo] += mensagem[key] + ' ';
          }
        }
    }
  }


  onSubmit() {
    this.feedback = this.feedbackFormGroup.value;
    console.log(this.feedback);
    this.feedbackFormGroup.reset({
      firstname: '',
      lastname:'',
      telnum: 0,
      email: '',
      agree: false,
      contact: 'Nenhum',
      message: ''
    });
  }
}
