import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']*/
})
export class AppComponent {
  constructor(private router: Router) {
    //this.router.navigate(['/g-establecimientos']);
    this.router.navigate(['/home']);
  }
  //atributos de la clase
}