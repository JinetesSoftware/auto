import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './features/clients/clients.component';
import { NewClientComponent } from './features/new-client/new-client.component';
import { WorkOrdersComponent } from './features/work-orders/work-orders.component';
import { BillingComponent } from './features/billing/billing.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/modules/components/components.module';
import { UpdateComponent } from './features/update/update.component';


@NgModule({
  declarations: [
    ClientsComponent,
    NewClientComponent,
    WorkOrdersComponent,
    BillingComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientsRoutingModule,
    MaterialModule,
    ComponentsModule,
  ],
})
export class ClientsModule {}
