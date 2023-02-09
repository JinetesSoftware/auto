import { ValidatorFn } from '@angular/forms';
import { Client } from 'src/app/core/models/Client';

export class FormInputBase<T> {
  placeholder: T | string | undefined;
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  options: { key: string; value: string }[];
  validators: ValidatorFn[] | null;
  readonly: boolean;
  description?: string;
  customError?: CustomError[];

  constructor(
    options: {
      placeholder?: string;
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      options?: { key: string; value: string }[];
      validators?: ValidatorFn[] | null;
      readonly?: boolean;
      description?: string;
      customError?: CustomError[];
    } = {}
  ) {
    this.placeholder = options.placeholder;
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.readonly = !!options.readonly;
    this.description = options.description || '';
    this.customError = options.customError || [];
  }

  updateValues(obj: Record<string, any>) {
    for (const key in obj) {
      if (key === this.key) {
        this.value = obj[key];
      }
    }
  }
}

export interface CustomError {
  regex: string;
  msg: string;
}
