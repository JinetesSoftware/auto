import { Validators } from '@angular/forms';
import { FormTextbox } from '../../../../../../shared/modules/components/components/dynamic-form/models/form-textbox';
export  const INPUTS_FORMS = [
  new FormTextbox({
    placeholder:'Nombre',
    value:'',
    key: ' person_name',
    label: ' person_name',
    type: 'text',
    validators:[],
    customError: []
  }),
  {
    label:'Nombre',
    name:'person_name',
    type:'text',
    defaultValue:'',
    validations: [Validators.required],
  },
  {
    label:'Primer Apellido',
    name:'person_first_lastname',
    type:'text',
    defaultValue:'',
    validations: [Validators.required],
  },
  {
    label:'Segundo Apellido',
    name:'person_second_lastname',
    type:'text',
    defaultValue:'',
    validations: [Validators.required],
  },
  {
    label:'Código Cliente',
    name:'cliente_code',
    type:'text',
    defaultValue:'',
    validations: [Validators.required],
  },
  {
    label:'Documento de Identidad',
    name:'identity_doc',
    type:'text',
    defaultValue:'',
    validations: [Validators.required],
  },
  {
    label:'Nombre de la Compañía',
    name:'company_name',
    type:'text',
    defaultValue:'',
    validations: [],
  },
  {
    label:'Nombre Comercial',
    name:'comercial_name',
    type:'text',
    defaultValue:'',
    validations: [],
  },
];
