import { Validators } from '@angular/forms';
import { FormTextbox } from '../../../../../../shared/modules/components/components/dynamic-form/models/form-textbox';
import { FormDropdown } from '../../../../../../shared/modules/components/components/dynamic-form/models/form-dropdown';
export  const INPUTS_FORMS = [
  new FormTextbox({
    placeholder:'Nombre',
    value:'',
    key: 'person_name',
    label: 'Nombre',
    type: 'text',
    validators:[Validators.required,],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Primer Apellido',
    value:'',
    key: 'person_first_lastname',
    label: 'Primer Apellido',
    type: 'text',
    validators:[Validators.required],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Segundo Apellido',
    value:'',
    key: 'person_second_lastname',
    label: 'Segundo Apellido',
    type: 'text',
    validators:[Validators.required,Validators.minLength(5) ,Validators.maxLength(15)],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Email',
    value:'',
    key: 'email',
    label: 'Correo Electrónico',
    type: 'text',
    validators:[Validators.required,Validators.email],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Telefono',
    value:'',
    key: 'phone',
    label: 'Número de telefono',
    type: 'text',
    validators:[Validators.required,Validators.pattern('^[09][0-9]{1,7}$')],
    customError: [{regex:'^[09][0-9]{1,7}$',msg:'Debe introducir un formato de telefono válido'}]
  }),
  new FormTextbox({
    placeholder:'Fecha Nacimiento',
    value:'',
    key: 'birthdate',
    label: 'Fecha Nacimiento',
    type: 'date',
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Fecha de Registro',
    value:'',
    key: 'register_date',
    label: 'Fecha de Registro',
    type: 'date',
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Edad',
    value:'',
    key: 'age',
    label: 'Edad',
    type: 'number',
    validators:[Validators.max(10), Validators.min(3)],
    customError: []
  }),
  new FormDropdown({
    placeholder:'Tipo de Doc',
    value:'',
    key: 'identity_doc_type',
    label: 'Tipo de Doc',
    type: 'string',
    validators:[Validators.required],
    options:[{key:'NIE',value:'NIE'},{key:'CIF',value:'CIF'}],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Doc Iden.',
    value:'',
    key: ' identity_doc',
    label: 'Doc Iden.',
    type: 'string',
    validators:[Validators.pattern('^[0-9]{8,8}[A-Za-z]$')],
    customError: [{regex:'^[0-9]{8,8}[A-Za-z]$',msg:'El campo debe ser de formato DNI'}]
  }),
  //here


];
