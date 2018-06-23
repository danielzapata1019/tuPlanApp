import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establecimiento } from './establecimientos/establecimiento';
import { String, StringBuilder } from 'typescript-string-operations';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GestionEstablecimientosService {
  public estUrl: string = "http://tuplansrv.herokuapp.com/api/zonas/{0}/establecimientosXzona";
  /*public estUrl:string="https://gist.githubusercontent.com/danielzapata1019/ac0fe9f47d8f34334f9a485884fa356f/raw/09820edbee86086db20e626a0262b73f1d4f01a3/establecimientos.json";*/
  public url: string;  
  
  /*public url:string="http://tuplansrv.herokuapp.com/api/Establecimientos";*/

  constructor(private http: HttpClient,private router:Router) { }

  public getEstablecimientos(idZona: string): Observable<Establecimiento> {
    this.url = String.Format(`${this.estUrl}`, `${idZona}`);
    //console.log('url:',this.url);
    return this.http.get<Establecimiento>(this.url);
  }

}
