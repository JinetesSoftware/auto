import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable, tap } from 'rxjs';
import { Client } from '../../../core/models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

 apiURL:string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getClients = () => {}

  postClient = (client: Client) => {
    console.log('PASO POR AQUI');
    return this.http.post<Client>(`${this.apiURL}/client/create`, client).pipe(
      tap((resp) => {
        if (resp) {
          console.log('ALL OK');
          return;
        }
        console.log('NOT OK');

      })
    )
  }
  putClient = () => {}
  deleteClients = () => {}

  testReq(){
  return this.http.get<{msg: string}>(environment.apiUrl + '/auth')
 }

}
