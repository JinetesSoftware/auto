import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientReq } from 'src/app/core/models/Client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetClientByIdResolver implements Resolve<boolean> {
  constructor(private http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.http.get<ClientReq>(`${environment.apiUrl}/client/${id}`);
  }
}
