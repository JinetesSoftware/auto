import { Component } from '@angular/core';
import {  FormControl, FormGroup } from '@angular/forms';
import { INPUTS_FORMS } from './inputsForm';
import { Client } from '../../../../../../core/models/Client';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent {

  registerInputs: any = INPUTS_FORMS;
  registerForm :FormGroup = new FormGroup({});

  constructor () {
  }

  saveClient = (ev: Client) => {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
