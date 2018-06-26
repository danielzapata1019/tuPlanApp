import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from './establecimiento.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { Establecimiento } from '../establecimientos/establecimiento';


@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.css'], 
  providers: [ EstablecimientoService ] //Proveedor del servicio
})

export class EstablecimientosComponent implements OnInit {

  DetalleEstablecimiento: any;
  establecimiento: Establecimiento;
  lat:number;
  lng:number;
  constructor(
    private establecimientosService:EstablecimientoService,   
    private route: ActivatedRoute,
    ) { }


  ngOnInit() {  
    this.getEstablecimiento_id();    
  }

  getEstablecimiento_id(): void {
    let id= this.route.snapshot.paramMap.get('idEst');
    this.establecimientosService.getEstablecimiento_id(id)
      .subscribe(estab => {
        this.DetalleEstablecimiento = estab;
        let toArray =  this.DetalleEstablecimiento.ubicacion.split(",");        
        this.lat= +toArray[0];
        this.lng= +toArray[1];
      });      
  }
 
}
