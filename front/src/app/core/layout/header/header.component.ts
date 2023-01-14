import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any;
  constructor(private authService: AuthService, private router: Router) {
    this.user = this.authService.getUserData();
  }

  logout = () => {
    this.authService.logout();
    this.router.navigate(['/'])
  };
}
