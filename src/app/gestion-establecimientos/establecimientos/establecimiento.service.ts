import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establecimiento } from './establecimiento';
import { String, StringBuilder } from 'typescript-string-operations';

@Injectable({
  providedIn: 'root'
})

export class EstablecimientoService {

  public estUrl:string="http://tuplansrv.herokuapp.com/api/zonas/{0}/establecimientosXzona";
  public url:string;

  /*public url:string="http://tuplansrv.herokuapp.com/api/Establecimientos";*/

  constructor(private http:HttpClient) { }

  public getEstablecimientos(idZona:string): Observable<Establecimiento> {
    this.url =String.Format(`${this.estUrl}`,`${idZona}`);
    //console.log('url:',this.url);
    return this.http.get<Establecimiento>(this.url);
  }


}
