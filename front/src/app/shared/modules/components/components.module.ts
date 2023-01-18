import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormInputComponent } from './components/dynamic-form/dynamic-form-input/dynamic-form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

const c = [DynamicFormComponent, DynamicFormInputComponent];

@NgModule({
  declarations: [...c],
  exports: [...c],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
})
export class ComponentsModule {}
