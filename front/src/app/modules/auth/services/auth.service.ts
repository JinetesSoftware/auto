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

  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, user).pipe(
      tap(resp => {
        this.handleAuth(resp.token);
      }),
      map(resp => resp),
      catchError(err => of(err.error))
    );
  }

  private handleAuth(token: string) {
    const payload = JSON.parse(atob(token.split('.')[1]));
    this._user = payload;

    localStorage.setItem('TOKEN', token);
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this._user.role[0] || '');
    localStorage.setItem('USER', JSON.stringify(this._user));
  }


  //GET USER DATA
  getUserData() {
    if (!this._user && !localStorage.getItem('USER')) {
      return null;
    }
    if (!this._user) {
      this._user = JSON.parse(localStorage.getItem('USER')!);
    }
    return this._user;
  }
  //VALIDATE TOKEN
  validateToken(): Observable<boolean> {
    if (!localStorage.getItem('TOKEN')) {
      this.router.navigate(['/']);
      return of(false);
    }
    return of(true);
  }

  //LOGOUT
  logout(): void {
    localStorage.clear();
    this._user = {};
  }

  //CHECK IF IS LOGGED IN
  isLoggedIn(): boolean {
    return localStorage.getItem('STATE') === 'true';
  }

  //CHECK ROLE
  getRole(): string | null {
    return localStorage.getItem('ROLE');
  }

  getToken(): string | null {
    return localStorage.getItem('TOKEN');
  }
}
