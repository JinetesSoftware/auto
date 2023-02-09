import { Validators } from '@angular/forms';
import { FormCheckbox } from 'src/app/shared/modules/components/dynamic-form/models/form-checkbox';
import { FormDropdown } from 'src/app/shared/modules/components/dynamic-form/models/form-dropdown';
import { FormInputBase } from 'src/app/shared/modules/components/dynamic-form/models/form-input-base';
import { FormTextarea } from 'src/app/shared/modules/components/dynamic-form/models/form-textarea';
import { FormTextbox } from 'src/app/shared/modules/components/dynamic-form/models/form-textbox';

export const BILLING_CONFIG_FORM: FormInputBase<string | boolean>[] = [
  new FormDropdown({
    key: 'lang',
    type: 'dropdown',
    label: 'Idioma',
    value: 'es',
    validators: [Validators.required],
    options: [
      {
        value: 'Español',
        key: 'es',
      },
      {
        value: 'Inglés',
        key: 'en',
      },
    ],
  }),

  new FormDropdown({
    key: 'currency',
    type: 'dropdown',
    label: 'Divisa',
    value: 'EUR',
    options: [
      {
        value: 'Euro (€)',
        key: 'EUR',
      },
      {
        value: 'Dollar ($)',
        key: 'DOLLAR',
      },
    ],
  }),

  new FormTextbox({
    key: 'texting',
    type: 'text',
    label: 'Text',
    value: '',
    placeholder: 'Text',
    readonly: false,
  }),

  new FormTextarea({
    key: 'textAreaing',
    label: 'TextArea',
    value: '',
    placeholder: 'TextArea',
    validators: [Validators.required, Validators.minLength(10)],
    readonly: false,
  }),

  new FormCheckbox({
    key: 'Checkbox',
    required: false,
    label: 'Check me!',
  }),
];
