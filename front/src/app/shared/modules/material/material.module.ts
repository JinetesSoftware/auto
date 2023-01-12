import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


const COMPONENTS = [MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    COMPONENTS
  ],
  exports:COMPONENTS
})
export class MaterialModule { }
