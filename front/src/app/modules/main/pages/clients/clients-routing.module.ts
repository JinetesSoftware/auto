import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './features/clients/clients.component';
import { NewClientComponent } from './features/new-client/new-client.component';
import { WorkOrdersComponent } from './features/work-orders/work-orders.component';
import { BillingComponent } from './features/billing/billing.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
  },
  {
    path: 'new-client',
    component: NewClientComponent,
  },
  {
    path: 'work-orders',
    component: WorkOrdersComponent,
  },
  {
    path: 'billing',
    component: BillingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
