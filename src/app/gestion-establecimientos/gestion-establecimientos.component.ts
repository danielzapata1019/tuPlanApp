import { Component, OnInit } from '@angular/core';
import { GestionEstablecimientosService } from '../gestion-establecimientos/gestion-establecimientos.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { Establecimiento } from './establecimientos/establecimiento';
import { Zona } from '../gestion-zonas/zona';

@Component({
  selector: 'app-gestion-establecimientos',
  templateUrl: './gestion-establecimientos.component.html',
  styleUrls: ['./gestion-establecimientos.component.css'],
  providers: [ GestionEstablecimientosService ] //Proveedor del servicio
})
export class GestionEstablecimientosComponent implements OnInit {
  establecimientosTemp:any;
  listEstablecimiento: any;
  listEstablecimiento2: any;
  establecimiento: Establecimiento;
  cat=localStorage.getItem("categoria");
  
  selectedEst: Establecimiento;

  constructor(
    private establecimientosService:GestionEstablecimientosService, 
    private router:Router,
    private route: ActivatedRoute,
    ) { }


  ngOnInit() {
    this.getEstablecimiento();
    /*this.establecimientosTemp=this.getEstablecimiento();
    console.log("Estableciemientos: ", this.establecimientosTemp);
    this.listEstablecimiento = this.establecimientosTemp.filter(
      est => est.categoriaId === this.cat);*/
  }

  getEstablecimiento(): void {    
    let id= this.route.snapshot.paramMap.get('idZona');    
    this.establecimientosService.getEstablecimientos(id)
      .subscribe(estab => this.listEstablecimiento = estab);
  }

  
onSelect(est: Establecimiento): void {
  this.selectedEst = est; 
  this.router.navigate(['/establecimiento', this.selectedEst.id]);
}

}