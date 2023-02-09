import { Validators } from '@angular/forms';
import { FormTextbox } from '../../../../../../shared/modules/components/dynamic-form/models/form-textbox';
import { FormDropdown } from '../../../../../../shared/modules/components/dynamic-form/models/form-dropdown';
export  const INPUTS_FORMS = [
  new FormTextbox({
    placeholder:'Nombre',
    value:'',
    key: 'person_name',
    label: 'Nombre',
    type: 'text',
    validators:[Validators.required,Validators.minLength(2) ,Validators.maxLength(15)],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Primer Apellido',
    value:'',
    key: 'person_first_lastname',
    label: 'Primer Apellido',
    type: 'text',
    validators:[Validators.required,Validators.minLength(3) ,Validators.maxLength(25)],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Segundo Apellido',
    value:'',
    key: 'person_second_lastname',
    label: 'Segundo Apellido',
    type: 'text',
    validators:[Validators.required,Validators.minLength(3) ,Validators.maxLength(25)],
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
    placeholder:'Password',
    value:'',
    key: 'password',
    label: 'Password',
    type: 'text',
    validators:[Validators.required,Validators.pattern('')],
    customError: [{regex:'',msg:'Contraseña debe tener minúscula, mayúsculas,numeros y simbolo. Min 8 Max 15'}]
  }),
  new FormTextbox({
    placeholder:'Teléfono',
    value:'',
    key: 'phone_number',
    label: 'Número de teléfono',
    type: 'text',
    validators:[Validators.required,Validators.maxLength(14), Validators.maxLength(9)],
    customError: []
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
    key: 'date_start',
    label: 'Fecha de Registro',
    type: 'date',
    validators:[Validators.required],
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
    key: 'identity_doc',
    label: 'Doc Iden.',
    type: 'string',
    validators:[Validators.required,Validators.pattern('^[0-9]{8,8}[A-Za-z]$')],
    customError: [{regex:'^[0-9]{8,8}[A-Za-z]$',msg:'El campo debe ser de formato DNI'}]
  }),
  //here
  new FormTextbox({
    placeholder:'Dirección',
    value:'',
    key: 'address',
    label: 'Dirección física',
    type: 'text',
    validators:[Validators.required],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Nombre Compañía',
    value:'',
    key: 'company_name',
    label: 'Nombre Compañía',
    type: 'text',
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Nombre Comercial',
    value:'',
    key: 'comercial_name',
    label: 'Nombre Comercial',
    type: 'text',
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'País',
    value:'',
    key: 'country',
    label: 'País de procedencia',
    type: 'text',
    validators:[],
    customError: []
  }),

  new FormDropdown({
    placeholder:'Tipo de Impuesto',
    value:'',
    key: 'taxes',
    label: 'Impuesto',
    type: 'text',
    options:[{key:'IVA',value:'IVA'},{key:'IGIC',value:'IGIC'}],
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Tarifa aplicada',
    value:'',
    key: 'apply_rates',
    label: 'Tarifa',
    type: 'text',
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Descuentos',
    value:'',
    key: 'discount',
    label: 'Descuentos',
    type: 'text',
    validators:[],
    customError: []
  }),

];
