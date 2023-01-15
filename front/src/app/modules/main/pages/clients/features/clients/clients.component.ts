import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ClientsService } from 'src/app/modules/main/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  constructor(private c: ClientsService) { }
  testData!: string;

  testReq() {
    this.c.testReq().pipe(map(res => res.msg)).subscribe(res => {
      this.testData = res;
    });

  }

}
