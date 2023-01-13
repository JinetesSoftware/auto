import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { HeaderComponent } from 'src/app/core/layout/header/header.component';

@NgModule({
  declarations: [
    MainComponent,HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
  ],
  exports:[HeaderComponent]
})
export class MainModule { }
