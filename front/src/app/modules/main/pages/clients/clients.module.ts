import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { NewClientComponent } from './features/new-client/new-client.component';
import { WorkOrdersComponent } from './features/work-orders/work-orders.component';
import { BillingComponent } from './features/billing/billing.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';



@NgModule({
  declarations: [
    ClientsComponent,
    NewClientComponent,
    WorkOrdersComponent,
    BillingComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule
  ],
})
export class ClientsModule { }
