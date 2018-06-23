import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { GestionZonasComponent } from '../gestion-zonas/gestion-zonas.component';
/*import { EstablecimientosComponent } from '../gestion-establecimientos/establecimientos/establecimientos.component';*/
import { GestionEstablecimientosComponent } from '../gestion-establecimientos/gestion-establecimientos.component';
import { EstablecimientosComponent } from '../gestion-establecimientos/establecimientos/establecimientos.component';
import { CategoriasComponent } from '../home/categorias/categorias.component';

const routes: Routes = 
[{
  path:'home',
  component:HomeComponent,
  children:[
    {
      path:'categorias',
      component:CategoriasComponent
    }
  ]
},
{
  path:'zonas',
  component:GestionZonasComponent
},
{ 
  path:'g-establecimientos/:idZona',
  component:GestionEstablecimientosComponent
},
{ 
  path:'establecimiento/:idEst',
  component:EstablecimientosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
