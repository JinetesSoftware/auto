import { Component } from '@angular/core';
import { BILLING_CONFIG_FORM } from './inputsForm';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent {
  inputsForm = BILLING_CONFIG_FORM;

  formData(event: any) {
    console.log(event);
  }
}
