import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  //TODO: TIPAR
  user:any;
  loginForm: FormGroup = new FormGroup({});

	emailFormControl: FormControl = new FormControl('info@info102.com', [
		Validators.required,
		Validators.email,
	]);

	passwordFormControl: FormControl = new FormControl('', [
		Validators.required,
	]);

	constructor(private router: Router, private auth: AuthService) {
		this.loginForm = new FormGroup({
			account: this.emailFormControl,
			password: this.passwordFormControl,
		});
	}

  //LOGIN
	login = () => {
		if (this.loginForm.valid) {
			const loginUser: any = {
				account: this.loginForm.get('account')?.value,
				password: this.loginForm.get('password')?.value,
			};
			this.auth.login(loginUser).subscribe((resp) => {
				if (!resp.token) {
					this.router.navigate(['']);
				} else {
					this.router.navigate(['/app']);
				}
			});
		} else {
			this.loginForm.markAllAsTouched();
			console.log('Invalid Form');
		}
	};
  //VALIDATE FORM
	isValidate = (field: string) => {
		return (
			this.loginForm.get(field)?.errors && this.loginForm.get(field)?.touched
		);
	};
}
