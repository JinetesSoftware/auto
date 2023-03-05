import { Validators } from '@angular/forms';
import { FormTextbox } from '../../../../../../shared/modules/components/dynamic-form/models/form-textbox';
import { FormDropdown } from '../../../../../../shared/modules/components/dynamic-form/models/form-dropdown';
export  const UPDATE_FORMS = [
  new FormTextbox({
    placeholder:'Nombre',
    value:'',
    key: 'person_name',
    label: 'Nombre',
    type: 'text',
    disabled:false,
    validators:[Validators.required,Validators.minLength(2) ,Validators.maxLength(15)],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Primer Apellido',
    value:'',
    key: 'person_first_lastname',
    label: 'Primer Apellido',
    type: 'text',
    disabled:false,
    validators:[Validators.required,Validators.minLength(3) ,Validators.maxLength(25)],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Segundo Apellido',
    value:'',
    key: 'person_second_lastname',
    label: 'Segundo Apellido',
    type: 'text',
    disabled:false,
    validators:[Validators.required,Validators.minLength(3) ,Validators.maxLength(25)],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Email',
    value:'',
    key: 'email',
    label: 'Correo Electrónico',
    type: 'text',
    disabled:false,
    validators:[Validators.required,Validators.email],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Password',
    value:'',
    key: 'password',
    label: 'Password',
    type: 'text',
    disabled:false,
    validators:[Validators.required,Validators.pattern('')],
    customError: [{regex:'',msg:'Contraseña debe tener minúscula, mayúsculas,numeros y simbolo. Min 8 Max 15'}]
  }),
  new FormTextbox({
    placeholder:'Teléfono',
    value:'',
    key: 'phone_number',
    label: 'Número de teléfono',
    type: 'text',
    disabled:false,
    validators:[Validators.required,Validators.maxLength(14), Validators.maxLength(9)],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Edad',
    value:'',
    key: 'age',
    label: 'Edad',
    disabled:true,
    type: 'number',
    customError: []
  }),
  new FormTextbox({
    placeholder:'Fecha Nacimiento',
    value:'',
    key: 'birthdate',
    label: 'Fecha Nacimiento',
    type: 'date',
    disabled:false,
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Fecha de Registro',
    readonly: true,
    value:'',
    key: 'date_start',
    label: 'Fecha de Registro',
    type: 'date',
    disabled:false,
    validators:[Validators.required],
    customError: []
  }),
  new FormDropdown({
    placeholder:'Tipo de Doc',
    value:'',
    key: 'identity_doc_type',
    label: 'Tipo de Doc',
    type: 'string',
    disabled:false,
    validators:[Validators.required],
    options:[{key:'NIE',value:'NIE'},{key:'NIF',value:'NIF'}],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Doc Iden.',
    value:'',
    key: 'identity_doc',
    label: 'Doc Iden.',
    type: 'string',
    disabled:false,
    validators:[Validators.required,Validators.maxLength(12)],
    customError: []
  }),
  //here
  new FormTextbox({
    placeholder:'Dirección',
    value:'',
    key: 'address',
    label: 'Dirección física',
    type: 'text',
    disabled:false,
    validators:[Validators.required],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Nombre Compañía',
    value:'',
    key: 'company_name',
    label: 'Nombre Compañía',
    type: 'text',
    disabled:false,
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Nombre Comercial',
    value:'',
    key: 'comercial_name',
    label: 'Nombre Comercial',
    type: 'text',
    disabled:false,
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'País',
    value:'',
    key: 'country',
    label: 'País de procedencia',
    type: 'text',
    disabled:false,
    validators:[],
    customError: []
  }),

  new FormDropdown({
    placeholder:'Tipo de Impuesto',
    value:'',
    key: 'taxes',
    label: 'Impuesto',
    type: 'text',
    disabled:false,
    options:[{key:'IVA',value:'21'},{key:'IGIC',value:'7'},{key:'No aplica',value:''}],
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Tarifa aplicada',
    value:'',
    key: 'apply_rates',
    label: 'Tarifa',
    type: 'text',
    disabled:false,
    validators:[],
    customError: []
  }),
  new FormTextbox({
    placeholder:'Descuentos',
    value:'',
    key: 'discount',
    label: 'Descuentos',
    type: 'text',
    disabled:false,
    validators:[],
    customError: []
  }),

];
