import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ] //Proveedor del servicio  
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    let user:any;
    user= localStorage.getItem('user');
    if(user != undefined){
      this.router.navigate(['home']);

    }
  }
  login(): void {
    let user: any = {
      name: this.email,
      id: this.password
    }
    let datos:any;
    console.log(user);
    this.loginService.getUsuarios().subscribe(res=>{
      if(res!=undefined){
        console.log(res);
        datos=res;
        if(user.name==datos[0].email && user.id== datos[0].birthDate){
          localStorage.setItem("user",JSON.stringify(datos[0]));
          console.log('se logueo');
          this.router.navigate(['/home']);
        }else{
          console.log('no papa');
        }
      }
    }); 
  }
}
