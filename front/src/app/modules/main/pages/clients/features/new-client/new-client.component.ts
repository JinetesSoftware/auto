import { Component } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { INPUTS_FORMS } from './inputsForm';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent {

  registerInputs: any = INPUTS_FORMS;
  registerForm :FormGroup = new FormGroup({});

  constructor () {
    const form = this.registerInputs.reduce((form:any, input:any) => {
      return {...form, [input.name]: new FormControl('' , input.validations)}
    }, {})
    this.registerForm = new FormGroup(form);
  }

  saveClient = () => {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

    }
  }
}
