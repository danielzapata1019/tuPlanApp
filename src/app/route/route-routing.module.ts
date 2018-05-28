import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ZonasComponent } from '../home/zonas/zonas.component';

const routes: Routes = 
[{
  path:'home',
  component:HomeComponent
},
{
  path:'zonas',
  component:ZonasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
