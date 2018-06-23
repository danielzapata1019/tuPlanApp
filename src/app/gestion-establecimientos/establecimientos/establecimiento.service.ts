import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establecimiento } from './establecimiento';
import { String, StringBuilder } from 'typescript-string-operations';

@Injectable({
  providedIn: 'root'
})

export class EstablecimientoService {

  public estUrl:string="http://tuplansrv.herokuapp.com/api/Establecimientos/{0}";
  public url:string;

  constructor(private http:HttpClient) { }
  
  public getEstablecimiento_id(idEstablecimiento: string): Observable<Establecimiento> {
    this.url = String.Format(`${this.estUrl}`, `${idEstablecimiento}`);
    console.log('urlId:',this.url);
    return this.http.get<Establecimiento>(this.url);
  }
}
