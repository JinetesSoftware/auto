export const handleValidatorName = (validatorName: string) => {

if(validatorName === 'required') {
return 'Este campo es requerido'
}

if(validatorName === 'minLength') {
  return 'Este campo Polla'
  }

return 'error not found'

}
