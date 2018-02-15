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

  constructor(private fb: FormBuilder) { 
    this.createForm(); 
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackFormGroup = this.fb.group({
        firstname: '',
        lastname: '',
        telnum: 0,
        email: '',
        agree: false,
        contact: 'Nenhum',
        message: ''
    })
  }

  onSubmit() {
    this.feedback = this.feedbackFormGroup.value;
    console.log(this.feedback);
    this.feedbackFormGroup.reset();
  }
}
