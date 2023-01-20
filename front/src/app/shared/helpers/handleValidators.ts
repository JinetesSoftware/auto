import { ValidatorFn } from "@angular/forms"

export const handleValidatorName = (validatorName:ValidatorFn[] | null) => {
  let arrayErrors:string[]  = []
  if (validatorName === null) {
    return;
  }
validatorName.forEach((val:ValidatorFn) => {


  if(val.name === 'required') {
  return arrayErrors.push('Este campo es requerido')
  }
  if(val.name === 'min') {
    return arrayErrors.push('Este campo es requerido')
  }
  if(val.name === 'required') {
    return arrayErrors.push('Este campo es requerido')
  }
  if(val.name === 'required') {
    return arrayErrors.push('Este campo es requerido')
  }
  if(val.name === 'required') {
    return  arrayErrors.push('Este campo es requerido')
  }
  if(val.name === 'minLength') {
    return arrayErrors.push('Este campo es requerido')
    }

  return 'Se ha producido un error en este campo'
})
return arrayErrors;
}
