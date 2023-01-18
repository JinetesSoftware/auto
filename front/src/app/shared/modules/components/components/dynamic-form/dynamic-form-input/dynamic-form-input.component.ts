import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputBase } from '../models/form-input-base';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss'],
})
export class DynamicFormInputComponent {
  @Input() field!: FormInputBase<any>;
  @Input() form!: FormGroup;


  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;


  hasFieldError(): boolean {
    return (
      this.form.get(this.field.key)!.invalid &&
      (this.form.get(this.field.key)!.dirty ||
        this.form.get(this.field.key)!.touched)
    );
  }
}
