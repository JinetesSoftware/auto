import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
sendingSuccess:boolean = false;

  forgotForm: FormGroup = new FormGroup({});
  //TODO: TIPAR
  recoveryUser:any;

  emailFormControl: FormControl = new FormControl('info@info102.com', [
		Validators.required,
		Validators.email,
	]);
  nameFormControl: FormControl = new FormControl('', [
		Validators.required,
		Validators.maxLength(20)
	]);


  constructor(private router: Router, private auth: AuthService) {
		this.forgotForm = new FormGroup({
			email: this.emailFormControl,
			name: this.nameFormControl,
		});
	}

  recoveryAccount = () => {
    if(this.forgotForm.valid) {
      this.recoveryUser = {
        email:this.forgotForm.get('email')?.value,
        name:this.forgotForm.get('name')?.value,
      }
      console.log(this.recoveryUser);
      this.sendingSuccess = true;
      return;
    }
    console.log('Ha habido un problema al enviar el email de recuperación');
  }

  back = () => {
    this.router.navigate([''])
  }
}
