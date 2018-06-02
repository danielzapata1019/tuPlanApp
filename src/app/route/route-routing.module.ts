import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { GestionZonasComponent } from '../gestion-zonas/gestion-zonas.component';
/*import { EstablecimientosComponent } from '../gestion-establecimientos/establecimientos/establecimientos.component';*/
import { GestionEstablecimientosComponent } from '../gestion-establecimientos/gestion-establecimientos.component';

const routes: Routes = 
[{
  path:'home',
  component:HomeComponent
},
{
  path:'zonas',
  component:GestionZonasComponent
},
{
  path:'g-establecimientos',
  component:GestionEstablecimientosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
