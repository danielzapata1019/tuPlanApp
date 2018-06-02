import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EstablecimientoService {

  public url:string="http://tuplansrv.herokuapp.com/api/Establecimientos";

  constructor(private http:HttpClient) { }

  public getEstablecimientos():any{
    return this.http.get(this.url);
  }


}
