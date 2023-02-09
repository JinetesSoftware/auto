import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientsService } from '../../services/clients.service';

@Injectable({
  providedIn: 'root',
})
export class GetClientByIdResolver implements Resolve<boolean> {
  constructor(private http: HttpClient, private clientService:ClientsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.clientService.getClientById(id);
  }
}
