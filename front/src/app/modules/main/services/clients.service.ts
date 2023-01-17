import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  getClients = () => {}
  postClient = () => {}
  putClient = () => {}
  deleteClients = () => {}
  
  testReq(){
  return this.http.get<{msg: string}>(environment.apiUrl + '/auth')
 }

}
