import { Component } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { Client } from 'src/app/core/models/Client';
import { ClientsService } from 'src/app/modules/main/services/clients.service';
import { ModalService } from '../../../../../../shared/services/modal.service';

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
  titleModal: string = 'Eliminar Cliente';
  clientUses!: Client;

  constructor(
    private clientService: ClientsService,
    private modalService: ModalService
  ) {
    this.clientService.getClients().subscribe((resp) => {
      if (resp) {
        console.log('CLIENTES ANTES', resp);
        this.filterClientsActivated(resp.clients);
        console.log('CLIENTES', this.clients);
      }
    });
  }

  filterClientsActivated = (clients: Client[]) => {
    this.clients = clients.filter((cli: Client) => {
      return cli.status === true;
    });
  }

  openDeleteModal = (client: Client) => {
    this.clientUses = client;
    this.modalService.open();
  };

  deleteClient(ev: any) {
    if (ev) {
      this.clientService
        .desactivatedClient(this.clientUses)
        .subscribe((resp) => {
          if (resp) {
            this.clients = this.clients.filter((cli) => {
              return cli._id !== this.clientUses._id;
            })
          }
        });
      this.modalService.close();
      return;
    }
    this.modalService.close();
  }

  updateClient() {
    console.log('Update');
  }
}
