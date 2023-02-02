import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase } from './models/form-input-base';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit{
  @Input() formFields: FormInputBase<any>[] | null = [];
  @Input() submit = true;
  @Input() btnLabel = 'Enviar';
  @Input() btnLabel2 = 'Cancelar';
  @Input() btnMargin = '16px';
  @Input() messageToast1 = '';
  @Input() messageToast2 = '';
  @Input() formLayout = '3';
  @Input() inputLayout = '5:1';

  @Output() formData = new EventEmitter();
  @Output() cancelForm = new EventEmitter();

  form!: FormGroup

  constructor (private toastr: ToastrService) {}
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
  this.toastr.error('Han habido errores al rellenar el formulario')
      return;
    }
   this.formData.emit(this.form.value)

  }
  onCancel = () => {
   this.cancelForm.emit(false)
  }

  private toFormGroup(): void {

    const group = {} as any ;

    this.formFields!.forEach((field) => {
      group[field.key] = new FormControl(field.value || '', field.validators);
    });

    this.form = new FormGroup(group);
  }
}


