import { Component, OnInit } from '@angular/core';
import { CategoriasService } from './categorias.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
  providers: [ CategoriasService ] //Proveedor del servicio 
})
export class CategoriasComponent implements OnInit {
  listCategorias: any;
  constructor(private categoriasService:CategoriasService, private router:Router) { }

  ngOnInit() {
    this.getRestItems();
    //this.categorias.getCategorias().subscribe(res=>console.log(res));
    
  }
   getRestItems(): void {
    this.categoriasService.getCategorias().subscribe(res=>{      
      this.listCategorias=res;
      console.log(this.listCategorias);
      });    
  }

  next(i): void{
 this.saveCategoria(i);
  this.router.navigate(['/zonas']);
}
public saveCategoria(item):void{
  /*console.log('Categoria guardada. ',this.listCategorias[item].id)*/
  localStorage.setItem("categoria", this.listCategorias[item].id); 
}
}


