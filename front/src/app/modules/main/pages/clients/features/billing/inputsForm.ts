import { FormCheckbox } from "src/app/shared/modules/components/components/dynamic-form/models/form-checkbox";
import { FormDropdown } from "src/app/shared/modules/components/components/dynamic-form/models/form-dropdown";
import { FormInputBase } from "src/app/shared/modules/components/components/dynamic-form/models/form-input-base";
import { FormTextarea } from "src/app/shared/modules/components/components/dynamic-form/models/form-textarea";
import { FormTextbox } from "src/app/shared/modules/components/components/dynamic-form/models/form-textbox";

export const BILLING_CONFIG_FORM: FormInputBase<string | boolean>[] = [
  new FormDropdown({
    key: 'lang',
    type: 'dropdown',
    label: 'Idioma',
    value: 'es',
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
    required: true,
    label: 'Text',
    value: '',
    placeholder: 'Text',
    readonly: false,
  }),

  new FormTextarea({
    key: 'textAreaing',
    required: true,
    label: 'TextArea',
    value: '',
    placeholder: 'TextArea',
    readonly: false,
  }),

  new FormCheckbox({
    key: 'Checkbox',
    required: false,
    label: 'Check me!',
  })



];
