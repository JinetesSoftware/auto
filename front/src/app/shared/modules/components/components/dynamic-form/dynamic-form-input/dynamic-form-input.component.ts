import { Component, Input } from '@angular/core';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { handleValidatorName } from 'src/app/shared/helpers/handleValidators';
import { FormInputBase } from '../models/form-input-base';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss'],
})
export class DynamicFormInputComponent {
  @Input() field!: FormInputBase<any>;
  @Input() form!: FormGroup;

  hasFieldError(): boolean {
    return (
      this.form.get(this.field.key)!.invalid &&
      (this.form.get(this.field.key)!.dirty ||
        this.form.get(this.field.key)!.touched)
    );
  }

  handleValidator(validatorName :string){
    return handleValidatorName(validatorName);
  }


}
