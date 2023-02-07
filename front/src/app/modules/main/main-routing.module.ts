import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/clients/clients.module').then((m) => m.ClientsModule), // TODO: DASHBOARD GENERAL INFO
      },

      {
        path: 'client',
        loadChildren: () =>
          import('./pages/clients/clients.module').then((m) => m.ClientsModule),
      },

      {
        path: 'planning',
        loadChildren: () =>
          import('./pages/planning/planning.module').then(
            (m) => m.PlanningModule
          ),
      },

      {
        path: 'works',
        loadChildren: () =>
          import('./pages/works/works.module').then((m) => m.WorksModule),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
