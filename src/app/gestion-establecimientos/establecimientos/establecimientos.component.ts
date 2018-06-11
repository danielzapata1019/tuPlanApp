import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from './establecimiento.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Establecimiento } from '../establecimientos/establecimiento';
import { Zona } from '../../gestion-zonas/zona';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.css'],
  providers: [ EstablecimientoService ] //Proveedor del servicio
})

export class EstablecimientosComponent implements OnInit {

  listEstablecimiento: any;
  establecimiento: Establecimiento;

  constructor(
    private establecimientosService:EstablecimientoService, 
    private router:Router,
    private route: ActivatedRoute,
    ) { }


  ngOnInit() {
    this.getEstablecimiento();
    /*this.getRestItems();*/
  }

  /*getRestItems(): void {
    this.establecimientosService.getEstablecimientos().subscribe(res => {      
      this.listEstablecimiento = res;
      console.log(this.listEstablecimiento);
    });    
  }*/
  getEstablecimiento(): void {
    let id= this.route.snapshot.paramMap.get('id');
    this.establecimientosService.getEstablecimientos(id)
      .subscribe(estab => this.establecimiento = estab);
  }
}
