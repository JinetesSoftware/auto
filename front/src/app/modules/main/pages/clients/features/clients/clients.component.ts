import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Client } from 'src/app/core/models/Client';
import { ClientsService } from 'src/app/modules/main/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  clients: Client[] = [];
  displayedColumns: any = [
    'person_name',
    'email',
    'comercial_name',
    'phone_number',
    'icon',
  ];
  constructor(private clientService: ClientsService) {
    this.clientService.getClients().subscribe((resp) => {
      if (resp) {
        this.clients = resp.clients;
        console.log('Clientes', this.clients);
      }
    });
  }

  deleteClient() {console.log('Delete')}
  updateClient() {console.log('Update')}
}
