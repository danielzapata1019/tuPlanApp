import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {
public url:string="http://tuplansrv.herokuapp.com/api/zonas";
  //contiene el llamado al servicio
  constructor(private http:HttpClient) { 
}
 public getZonas():any{
    return this.http.get(this.url);
  }
}
