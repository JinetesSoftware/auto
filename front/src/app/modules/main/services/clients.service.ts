import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable, tap, catchError, of } from 'rxjs';
import { Client } from '../../../core/models/Client';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

 apiURL:string = environment.apiUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getClients = ():Observable<any> => {
    return this.http.get<Client[]>(`${this.apiURL}/client`).pipe(
      tap((resp) => {
        if (resp) {
          this.toastr.success(`Se han cargado los clientes con éxito`)
        }
      }),
      catchError((e: any) =>{
        console.error(e);
        if (e) {
          this.toastr.error('Ha habido un error al cargar los clientes')
          return e;
        }
      })
    )
  }

  postClient = (client: Client) => {
    return this.http.post<any>(`${this.apiURL}/client/create`, client).pipe(
      tap((resp) => {
        if (resp) {
          this.toastr.success(`Se ha creado un nuevo cliente, ${resp.newclient.person_name}`)
        }
      }),
      catchError((e) =>{
        console.error(e);
        if(e) {
          this.toastr.error('Ha habido un error al generar el nuevo cliente')
          return e;
        }
      })
    )
  }
  putClient = () => {}
  deleteClients = () => {}

  testReq(){
  return this.http.get<{msg: string}>(environment.apiUrl + '/auth')
 }

}
