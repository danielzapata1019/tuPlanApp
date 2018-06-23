import { Component, OnInit } from '@angular/core';
import { ZonasService } from './zonas.service';
import { Router } from '@angular/router';
import { Zona } from '../gestion-zonas/zona';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-gestion-zonas',
  templateUrl: './gestion-zonas.component.html',
  styleUrls: ['./gestion-zonas.component.css'],
  providers: [ZonasService] //Proveedor del servicio 
})
export class GestionZonasComponent implements OnInit {
  listZonas: any;
  public idZona: String = '';

  selectedZona: Zona;
  private selectedId: number;
  constructor(
    private zonasService: ZonasService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
      /*this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        console.log(this.selectedId);
        return null;
      })
    );*/

     this.getRestItems();
    //this.categorias.getCategorias().subscribe(res=>console.log(res));
  }


   

  getRestItems(): void {
    this.zonasService.getZonas().subscribe(res => {
      this.listZonas = res;
      console.log(this.listZonas);
    });
  }
  onSelect(zona: Zona): void {
    this.selectedZona = zona;    
    this.router.navigate(['/g-establecimientos', this.selectedZona.id]);
  }

}
