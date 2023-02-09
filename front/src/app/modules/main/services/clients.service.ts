import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable, tap, catchError, of } from 'rxjs';
import { Client } from '../../../core/models/Client';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getClients = (): Observable<any> => {
    return this.http.get<Client[]>(`${this.apiURL}/client`).pipe(
      tap((resp) => {
        if (resp) {
          this.toastr.success(`Se han cargado los clientes con éxito`);
        }
      }),
      catchError((e: any) => {
        console.error('ERROR DEL GET', e);
        if (e) {
          this.toastr.error('Ha habido un error al cargar los clientes');
          return e;
        }
      })
    )
  }
  getClientById = (id: string | null):Observable<any> => {
    return this.http.get<any>(`${this.apiURL}/client/${id}`).pipe(
      tap((resp) => {
        if (resp) {
          this.toastr.success(`Se ha cargado los datos de ${resp.client.person_name}`)
        }
      }),
      catchError((e: any) =>{
        console.error('ERROR DEL GET ID',e);
        if (e) {
          this.toastr.error(`Ha habido un error al cargar los datos del cliente`)
          return e;
        }
      })
    )
  }

  postClient = (client: Client) => {
    return this.http.post<any>(`${this.apiURL}/client/create`, client).pipe(
      tap((resp) => {
        if (resp) {
          this.toastr.success(
            `Se ha creado un nuevo cliente, ${resp.newclient.person_name}`
          );
        }
      }),
      catchError((e) => {
        console.error('ERROR DEL POST', e);
        if (e) {
          this.toastr.error('Ha habido un error al generar el nuevo cliente');
          return e;
        }
      })
    );
  };

  updateClient = (client: any, id: string) => {
    return this.http
      .put<any>(`${this.apiURL}/client/update/${id}`, client)
      .pipe(
        tap((resp) => {
          if (resp) {
            this.toastr.success(
              `Se editado el cliente: ${client.person_name}`
            );
          }
        }),
        catchError((e) => {
          console.error('ERROR AL EDITAR CLIENTE', e);
          if (e) {
            this.toastr.error('Ha habido un error al editar el cliente');
            return e;
          }
        })
      );
  };

  desactivatedClient = (client: Client) => {
    return this.http
      .put<any>(`${this.apiURL}/client/delete/${client._id}`, client)
      .pipe(
        tap((resp) => {
          if (resp) {
            this.toastr.success(`Cliente desactivado, ${client.person_name}`);
          }
        }),
        catchError((e) => {
          console.error('ERROR DEL PUST', e);
          if (e) {
            this.toastr.error(
              `Ha habido un error al desactivar al cliente ${client.person_name}`
            );
            return e;
          }
        })
      );
  };

  deleteClients = () => {};

  testReq() {
    return this.http.get<{ msg: string }>(environment.apiUrl + '/auth');
  }
}
