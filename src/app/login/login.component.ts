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
  alert: string="";
  display='none';
  constructor(private loginService:LoginService, private router:Router) { }

  ngOnInit() {
    let user:any;
    //user= localStorage.getItem('user');
    user=sessionStorage.getItem("user");
    if(user != undefined){
      //this.router.navigate(['home']);
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
        for (let i in datos) {
          if(user.name==datos[i].email && user.id== datos[i].birthDate){
            sessionStorage.setItem("user", JSON.stringify(datos[i]));
           //localStorage.setItem("user",JSON.stringify(datos[i]));
            console.log('se logueo');
            this.display='none'; 
            //this.router.navigate(['/home']);
          }else{
            this.alert="Usuario o contraseña inválidos";
          }
        }
       
      }
    }); 
  }
}
