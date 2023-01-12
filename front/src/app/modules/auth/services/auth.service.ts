import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user!: any;
  private apiUrl: string = environment.apiUrl;

constructor(private http:HttpClient) { }

login = (user: any): Observable<any> => {
  console.log(user);
  return this.http.post<any>(`${this.apiUrl}/auth/login`, user).pipe(
    tap((resp) => {
      console.log(resp);

      // localStorage.setItem('token', resp.token!);
      // const tokenSplit = localStorage.getItem('token')!.split('.');
      // const payload = JSON.parse(atob(tokenSplit![1]));
      // this._user = payload;
      // localStorage.setItem('_user', JSON.stringify(this._user));
    }),
    map((resp) => {
      return resp;
    }),
    catchError((err) => {
      return of(err.error);
    }),
  );
};

}
