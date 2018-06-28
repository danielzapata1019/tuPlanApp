import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  public url: string = "http://tuplansrv.herokuapp.com/api/usuarios";
  //contiene el llamado al servicio
  constructor(private http: HttpClient) {
  }
 
}
