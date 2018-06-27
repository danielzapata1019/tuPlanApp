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
  public getZonas(): any {
    return this.http.get(this.url);
  }

  addUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, user, httpOptions)
    .pipe(tap((user: Usuario) => this.log(`added hero w/ id=${user.id}`)),
      catchError(this.handleError<Usuario>('addUser'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('HeroService: ' + message);
  }
}
