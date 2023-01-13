import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user!: any;
  private apiUrl: string = environment.apiUrl;

  isLogin = false;
  roleAs!: string | null;

  constructor(private http: HttpClient, private router: Router) { }

  //LOGIN
  login = (user: any): Observable<any> => {
    console.log(user);
    return this.http.post<any>(`${this.apiUrl}/auth/login`, user).pipe(
      tap((resp) => {
        console.log(resp);
        localStorage.setItem('token', resp.token!);
        const tokenSplit = localStorage.getItem('token')!.split('.');
        const payload = JSON.parse(atob(tokenSplit![1]));
        this._user = payload;
        this.roleAs = this._user.role[0];
        console.log(this._user.role[0])
        localStorage.setItem('STATE', 'true');
        localStorage.setItem('ROLE', this.roleAs || '');
        localStorage.setItem('_user', JSON.stringify(this._user));
      }),
      map((resp) => {
        return resp;
      }),
      catchError((err) => {
        return of(err.error);
      })
    );
  };

  //GET USER DATA
  getUserData = () => {
    if (!this._user && !localStorage.getItem('_user')) {
      return null;
    }
    return (this._user || (JSON.parse(localStorage.getItem('_user')!)))
  }

  //VALIDATE TOKEN
  validateToken = (): Observable<any> => {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/']);
      return of(false);
    }
    return of(true);
  };

  //LOGOUT
  logout = () => {
    localStorage.clear();
    this._user = {};
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    return of({ success: this.isLogin, role: '' });
  };

//CHECK IF IS LOGGED IN
  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  //CHECK ROLE
  getRole() {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }
}
