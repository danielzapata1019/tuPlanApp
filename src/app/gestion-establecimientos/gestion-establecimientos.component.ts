import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from '../gestion-establecimientos/establecimientos/establecimiento.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Establecimiento } from './establecimientos/establecimiento';
import { Zona } from '../gestion-zonas/zona';

@Component({
  selector: 'app-gestion-establecimientos',
  templateUrl: './gestion-establecimientos.component.html',
  styleUrls: ['./gestion-establecimientos.component.css'],
  providers: [ EstablecimientoService ] //Proveedor del servicio
})
export class GestionEstablecimientosComponent implements OnInit {
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
    let id= this.route.snapshot.paramMap.get('idZona');    
    this.establecimientosService.getEstablecimientos(id)
      .subscribe(estab => this.listEstablecimiento = estab);     
      console.log('establecimiento:',this.listEstablecimiento);
  }
}