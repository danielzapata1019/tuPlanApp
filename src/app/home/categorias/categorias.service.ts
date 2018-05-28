import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  
public url:string="http://tuplansrv.herokuapp.com/api/categoria";
  //contiene el llamado al servicio
  constructor(private http:HttpClient) { 
}
 public getCategorias():any{
    return this.http.get(this.url);
  }
}
