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
    validators:[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$')],
    customError: [{regex:'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$',msg:'Contraseña debe tener minúscula, mayúsculas,numeros y simbolo. Min 8 Max 15'}]
  }),
  new FormTextbox({
    placeholder:'Código cliente',
    value:'',
    key: 'client_code',
    label: 'Código',
    type: 'text',
    validators:[Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]$')],
    customError: [{regex:'^[0-9]$', msg:'El código solo debe contener números'}]
  }),
  new FormTextbox({
    placeholder:'Teléfono',
    value:'',
    key: 'phone_number',
    label: 'Número de teléfono',
    type: 'text',
    validators:[Validators.pattern('^[09][0-9]{1,7}$')],
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
    key: 'date_start',
    label: 'Fecha de Registro',
    type: 'date',
    validators:[Validators.required],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Edad',
    value:'',
    key: 'age',
    label: 'Edad',
    type: 'number',
    validators:[Validators.max(99), Validators.min(18)],
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
    validators:[Validators.pattern('^[0-9]{8,8}[A-Za-z]$')],
    customError: [{regex:'^[0-9]{8,8}[A-Za-z]$',msg:'El campo debe ser de formato DNI'}]
  }),
  //here
  new FormTextbox({
    placeholder:'Nombre Compañía',
    value:'',
    key: 'company_name',
    label: 'Nombre Compañía',
    type: 'string',
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Nombre Comercial',
    value:'',
    key: ' comercial_name',
    label: 'Nombre Comercial',
    type: 'string',
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'País',
    value:'',
    key: ' country',
    label: 'País de procedencia',
    type: 'string',
    validators:[],
    customError: []
  }),

  new FormDropdown({
    placeholder:'Tipo de Impuesto',
    value:'',
    key: ' taxes',
    label: 'Impuesto',
    type: 'string',
    options:[{key:'IVA',value:'IVA'},{key:'IGIC',value:'IGIC'}],
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Tarifa aplicada',
    value:'',
    key: ' apply_rates',
    label: 'Tarifa',
    type: 'string',
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Descuentos',
    value:'',
    key: 'discount',
    label: 'Descuentos',
    type: 'number',
    validators:[],
    customError: []
  }),

];
