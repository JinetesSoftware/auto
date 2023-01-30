import { Component } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { INPUTS_FORMS } from './inputsForm';
import { Client } from '../../../../../../core/models/Client';
import { ClientsService } from '../../../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent {

  registerInputs: any = INPUTS_FORMS;



  constructor (private clientService: ClientsService, private router:Router) {
  }

  saveClient = (client: Client) => {
    this.clientService.postClient(client).subscribe((resp:any) => {
      console.log('LLEGA AL FRONT', resp);

    })
  }
  cancelForm = (ev: boolean) => {
    if(!ev) {
      this.router.navigate(['/app'])
    }
  }
}
