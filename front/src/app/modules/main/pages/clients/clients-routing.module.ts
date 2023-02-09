import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './features/clients/clients.component';
import { NewClientComponent } from './features/new-client/new-client.component';
import { WorkOrdersComponent } from './features/work-orders/work-orders.component';
import { BillingComponent } from './features/billing/billing.component';
import { UpdateComponent } from './features/update/update.component';
import { GetClientByIdResolver } from './clients.resolver';
import { TrashBinComponent } from './features/trash-bin/trash-bin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:"client/clients",
    pathMatch:'full'
  },
  {
    path: 'client/clients',
    component: ClientsComponent,
  },
  {
    path: 'client/new-client',
    component: NewClientComponent,
  },
  {
    path: 'client/work-orders',
    component: WorkOrdersComponent,
  },
  {
    path: 'client/billing',
    component: BillingComponent,
  },
  {
    path: 'client/update/:id',
    component: UpdateComponent,
    resolve: {
      data: GetClientByIdResolver
    }
  },
  {
    path: 'client/trash',
    component: TrashBinComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
