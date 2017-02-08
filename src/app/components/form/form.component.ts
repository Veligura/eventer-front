import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import {Event, Member, Author} from '../../models/models'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  outputs: ['form'],
  inputs: ['eventForEdit']
  
})
export class FormComponent implements OnInit {
  event: FormGroup
  form = new EventEmitter<any>();
  eventForEdit: any

  constructor() { }

  ngOnInit() {
    this.event= new FormGroup({
      title: new FormControl(this.eventForEdit.title || '',[Validators.required, Validators.minLength(2)]),
      description: new FormControl(this.eventForEdit.description || '',[Validators.required, Validators.minLength(2)]),
      author: new FormControl(this.eventForEdit.author || '',[Validators.required, Validators.minLength(2)]),
    })
  }


  submitEvent(event){
   this.form.emit(event)
  }


}
