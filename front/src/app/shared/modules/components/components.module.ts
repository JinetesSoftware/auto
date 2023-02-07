import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './dynamic-form/dynamic-form-input/dynamic-form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';

const c = [
  DynamicFormComponent,
  DynamicFormInputComponent,
  LoaderComponent,
  ModalComponent,
];

@NgModule({
  declarations: [...c],
  exports: [...c],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
})
export class ComponentsModule {}
