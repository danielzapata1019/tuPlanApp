import { Component, OnInit } from '@angular/core';
import { ZonasService} from './zonas.service';
import { Router } from '@angular/router';
import { Zona } from '../gestion-zonas/zona';

@Component({
  selector: 'app-gestion-zonas',
  templateUrl: './gestion-zonas.component.html',
  styleUrls: ['./gestion-zonas.component.css'],
  providers: [ ZonasService ] //Proveedor del servicio 
})
export class GestionZonasComponent implements OnInit {
  listZonas: any;
  public idZona: String = '';

  selectedZona: Zona;

  constructor(
    private zonasService:ZonasService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getRestItems();
    //this.categorias.getCategorias().subscribe(res=>console.log(res));
  }

   getRestItems(): void {
    this.zonasService.getZonas().subscribe(res=>{      
      this.listZonas=res;
      console.log(this.listZonas);
      });    
  }
  /*next(i){
    this.idZona=this.listZonas(i);
    this.router.navigate(['/g-establecimientos', this.idZona]);
  }*/

 

onSelect(zona: Zona): void {
  this.selectedZona = zona;
  console.log(this.selectedZona);
  this.router.navigate(['/g-establecimientos', this.selectedZona.id]);
}

}
