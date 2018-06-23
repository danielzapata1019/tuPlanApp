import { Component, OnInit } from '@angular/core';
import { EstablecimientoService } from './establecimiento.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
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

  constructor(
    private establecimientosService:EstablecimientoService, 
    private router:Router,
    private route: ActivatedRoute,
    ) { }


  ngOnInit() {  
    this.getEstablecimiento_id();    
  }

  getEstablecimiento_id(): void {
    let id= this.route.snapshot.paramMap.get('idEst');
    this.establecimientosService.getEstablecimiento_id(id)
      .subscribe(estab => this.DetalleEstablecimiento = estab);      
  }
 
}
