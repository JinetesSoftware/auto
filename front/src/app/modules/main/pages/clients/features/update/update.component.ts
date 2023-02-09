import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client, ClientReq } from 'src/app/core/models/Client';
import { ClientsService } from 'src/app/modules/main/services/clients.service';
import { FormInputBase } from 'src/app/shared/modules/components/dynamic-form/models/form-input-base';
import { UPDATE_FORMS } from './inputsForm';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  clientId: string = '';
  client: Client = {} as Client;
  fields: FormInputBase<any>[] = UPDATE_FORMS;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientsService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const { data } = this.route.snapshot.data as ClientReq;
    this.fields.forEach((field) => field.updateValues(data.client));
    this.clientId = data.client._id;
    this.client = data.client;
  }

  updateClient(client: Client) {
    this.client = client;
    this.calculateAge();
    this.clientService
      .updateClient(this.client, this.clientId)
      .subscribe((resp: any) => {
        if (resp) {
          this.router.navigate(['/app']);
        } else {
          this.toastr.error(
            'Se ha generado un error al crear un nuevo cliente'
          );
        }
      });
  }

  cancelForm = (ev: boolean) => {
    if (!ev) {
      this.router.navigate(['/app']);
    }
  };

  calculateAge = () => {
    if (!this.client.birthdate) {
      return;
    }
    let date = new Date();
    let birth = new Date(this.client.birthdate);
    let miliSecondsDay = 60 * 60 * 1000 * 24;
    let years = (date.getTime() - birth.getTime()) / miliSecondsDay;
    years = Math.trunc(years / 365);
    this.client.age = years;
    console.log(this.client.age);

  };
}
