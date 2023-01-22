import { ValidatorFn, FormGroup } from '@angular/forms';
import { CustomError, FormInputBase } from '../modules/components/components/dynamic-form/models/form-input-base';

export const handleValidatorName = (
  errorObj: any,
  field: FormInputBase<any>,
  form: FormGroup,
  customError: CustomError[] | undefined
) => {
  let arrayErrors: string[] = [];
  if (errorObj === null) {
    return;
  }
  let validatorName = Object.keys(errorObj);

  validatorName.forEach((val: string) => {
    if (val === 'required' && form.controls[field.key].errors) {
      arrayErrors.push('Este campo es requerido');
    }
    if (val === 'minlength' && form.controls[field.key].errors) {
      arrayErrors.push(
        `Este campo debe tener un mínimo de ${errorObj.minlength.requiredLength} caracteres`
      );
    }
    if (val === 'maxlength' && form.controls[field.key].errors) {
      arrayErrors.push(
        `Este campo debe tener un máximo de ${errorObj.maxlength.requiredLength} caracteres`
      );
    }
    if (val === 'max' && form.controls[field.key].errors) {
      arrayErrors.push(`Cantidad máxima  ${errorObj.max.max} `);
    }
    if (val === 'min' && form.controls[field.key].errors) {
      arrayErrors.push(`Cantidad mínima  ${errorObj.min.min}`);
    }
    if (val === 'pattern' && form.controls[field.key].errors) {
      customError?.forEach((reg:CustomError) => {
        if (errorObj.pattern.requiredPattern === reg.regex) {
          return arrayErrors.push(reg.msg);
        }
        return;
      });
    }
    if (val === 'email' && form.controls[field.key].errors) {
      arrayErrors.push('Email es incorrecto');
    }
    return;
  });
  return arrayErrors;
};
