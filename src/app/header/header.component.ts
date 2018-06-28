import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('show-modal') showModal: boolean; 
  @Output('loaded') loadedEmitter: EventEmitter < HeaderComponent > = new EventEmitter < HeaderComponent > ();
  @Output() positiveLabelAction = new EventEmitter();

  constructor() { }
  usuario:string="";
  ngOnInit() {
    let user:any;   
    //user= localStorage.getItem('user');
    user=sessionStorage.getItem("user");
    if(user != undefined){
      this.usuario=user.name;
      //this.router.navigate(['home']);
    }
  }
    
}

