import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INPUTS_FORMS } from './inputsForm';
import { Client } from '../../../../../../core/models/Client';
import { ClientsService } from '../../../../services/clients.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss'],
})
export class NewClientComponent implements OnInit {
  newClient!: Client;
  numClients: number = 0;
  registerInputs: any = INPUTS_FORMS;
  message: string =
    'El formulario no se ha rellenado de forma correcta, revíselo';
  constructor(private clientService: ClientsService, private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((clients: any) => {
      this.numClients = clients.clients.length;
    });
  }

  saveClient = (client: Client) => {
    this.newClient = client;
    this.createCodeClient();
    this.calculateAge();
    this.clientService.postClient(this.newClient).subscribe((resp: any) => {
      console.log('NUEVO CLIENTE',resp);
      if (resp.newclient.person_name) {
        this.router.navigate(['/app']);
        this.numClients++;
        return;
      }
      this.toastr.error('Se ha generado un error al crear un nuevo cliente');
    });
  };
  cancelForm = (ev: boolean) => {
    if (!ev) {
      this.router.navigate(['/app']);
    }
  };

  createCodeClient = () => {
    let date = new Date();
    let code = `${this.newClient.person_name}-${date.getFullYear()}-${this.numClients + 1}`;
    this.newClient.client_code = code;
  };
  calculateAge = () => {
    if (!this.newClient.birthdate) {
      return;
    }
    let date = new Date();
    let birth = new Date(this.newClient.birthdate);
    let miliSecondsDay = 60 * 60 * 1000 * 24;
    let years =( date.getTime() - birth.getTime())/ miliSecondsDay;
    years = Math.trunc(years / 365);
    this.newClient.age = years;

  };
}
