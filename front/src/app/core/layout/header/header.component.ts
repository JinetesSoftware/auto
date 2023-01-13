import { Component } from '@angular/core';
import { AuthService } from '../../../modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  user: any;
  constructor(private authService: AuthService) {
    this.user = this.authService.getUserData();
  }

  logout = () => {
    this.authService.logout();
  };
}
