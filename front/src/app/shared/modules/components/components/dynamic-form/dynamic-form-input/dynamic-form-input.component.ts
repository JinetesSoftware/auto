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
  @Input() classInput!: any;

  arrayErrors: string[] | undefined = [];
  showErrors: boolean = false;

  hasFieldError(): boolean {
    return (
      this.form.get(this.field.key)!.invalid &&
      (this.form.get(this.field.key)!.dirty ||
        this.form.get(this.field.key)!.touched)
    );
  }

  handleValidator() {
    let errorObj = this.form.controls[this.field.key].errors;

    this.arrayErrors = handleValidatorName(
      errorObj,
      this.field,
      this.form,
      this.field.customError
    );
    if (
      this.arrayErrors?.length &&
      this.form.get(this.field.key)?.touched &&
      this.form.controls[this.field.key].errors
    ) {
      return (this.showErrors = true);
    }
    return (this.showErrors = false);
  }
}
