import { Component, OnInit } from '@angular/core';
import { ZonasService} from './zonas.service';

@Component({
  selector: 'app-gestion-zonas',
  templateUrl: './gestion-zonas.component.html',
  styleUrls: ['./gestion-zonas.component.css'],
  providers: [ ZonasService ] //Proveedor del servicio 
})
export class GestionZonasComponent implements OnInit {
  listZonas: any;
  constructor(private zonasService:ZonasService) { }

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

}
