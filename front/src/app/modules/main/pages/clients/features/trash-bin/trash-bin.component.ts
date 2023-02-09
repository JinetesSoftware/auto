import { Component } from '@angular/core';
import { Client } from 'src/app/core/models/Client';
import { ClientsService } from 'src/app/modules/main/services/clients.service';
import { ModalService } from '../../../../../../shared/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trash-bin',
  templateUrl: './trash-bin.component.html',
  styleUrls: ['./trash-bin.component.scss']
})
export class TrashBinComponent {
  clients: Client[] = [];
  displayedColumns: any = [
    'person_name',
    'email',
    'comercial_name',
    'phone_number',
    'icon',
  ];

  clientUses: Client = {} as Client;

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private modalService: ModalService
  ) {
    this.clientService.getClientsTrash().subscribe((resp) => {
      if (resp) {
        this.clients = resp.clients;
      }
    });
  }

  openDeleteModal = (client: Client) => {
    this.clientUses = client;
    this.modalService.open();
  };

  activateClient(ev: any) {
    if (ev) {
      this.clientService
        .activatedClient(this.clientUses)
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
}
