import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INPUTS_FORMS } from './inputsForm';
import { Client } from '../../../../../../core/models/Client';
import { ClientsService } from '../../../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent implements OnInit {
  numClients: number = 0;
  registerInputs: any = INPUTS_FORMS;

  constructor(private clientService: ClientsService, private router: Router) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((clients: Client[]) => {
      this.numClients = clients.length;
    });
  }

  saveClient = (client: Client) => {
    console.log('Nuevo Cliente', client);
    let newClient: Client = this.createCodeClient(client);
    this.clientService.postClient(newClient).subscribe((resp: any) => {
      if (resp.name) {
        this.router.navigate(['/app']);
      }
    });
  };
  cancelForm = (ev: boolean) => {
    if (!ev) {
      this.router.navigate(['/app']);
    }
  };

  createCodeClient = (client: Client) => {
    let date = new Date();
    let code = `${date.getFullYear()}${this.numClients + 1}`;
    client.client_code = code;
    return client;
  };
  calculateAge = (date: Date) => {};
}
