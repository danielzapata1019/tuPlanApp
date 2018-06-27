import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url:string="http://tuplansrv.herokuapp.com/api/usuarios  ";
  //contiene el llamado al servicio
  constructor(private http:HttpClient) { 

  }
  public getUsuarios():any{
    return this.http.get(this.url);
  }
}
