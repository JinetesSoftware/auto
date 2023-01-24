import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase } from './models/form-input-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit{
  @Input() formFields: FormInputBase<any>[] | null = [];
  @Input() submit = true;
  @Input() btnLabel = 'Enviar';
  @Input() btnMargin = '16px';
  @Input() formLayout = 'column2';
  @Input() sectionLayout = 'section2';
  @Input() inputLayout = 'input1';

  @Output() formData = new EventEmitter();

  form!: FormGroup

  ngOnInit(): void {
    this.toFormGroup();
  }

  // Returns whether the form exists and has been modified.
  hasFormUnsavedChanges(): boolean {
    return this.form && this.form.dirty;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.formData.emit({msg: 'form validation error'});
      return;
    }
    this.formData.emit(this.form.value);
  }

  private toFormGroup(): void {

    const group = {} as any ;

    this.formFields!.forEach((field) => {
      group[field.key] = new FormControl(field.value || '', field.validators);
    });

    this.form = new FormGroup(group);
  }
}


