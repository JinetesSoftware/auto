import { Component } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { Client } from 'src/app/core/models/Client';
import { ClientsService } from 'src/app/modules/main/services/clients.service';
import { ModalService } from '../../../../../../shared/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  clients: Client[] = [];
  displayedColumns: any = [
    'client_code',
    'email',
    'comercial_name',
    'phone_number',
    'icon',
  ];
  titleModal: string = 'Eliminar Cliente';
  clientUses: Client = {} as Client;

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private modalService: ModalService
  ) {
    this.clientService.getClients().subscribe((resp) => {
      if (resp) {
        this.clients = resp.clients;
      }
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
            });
          }
        });
      this.modalService.close();
      return;
    }
    this.modalService.close();
  }

  updateClient(id: string) {
    this.router.navigate(['/app/client/update/', id]);
  }
}
