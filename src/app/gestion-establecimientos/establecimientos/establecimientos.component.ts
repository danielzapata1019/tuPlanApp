import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from './establecimiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.css'],
  providers: [ EstablecimientoService ] //Proveedor del servicio
})

export class EstablecimientosComponent implements OnInit {

  listEstablecimiento: any;

  constructor(private establecimientosService:EstablecimientoService, private router:Router) { }


  ngOnInit() {
    this.getRestItems();
  }

  getRestItems(): void {
    this.establecimientosService.getEstablecimientos().subscribe(res => {      
      this.listEstablecimiento = res;
      console.log(this.listEstablecimiento);
    });    
  }

}
