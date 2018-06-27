import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './home//categorias/categorias.component';
import { GestionZonasComponent } from './gestion-zonas/gestion-zonas.component';
import { GestionEstablecimientosComponent } from './gestion-establecimientos/gestion-establecimientos.component';
import { HeaderComponent } from './header/header.component';
import { EstablecimientosComponent } from './gestion-establecimientos/establecimientos/establecimientos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservaComponent } from './reserva/reserva.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    CategoriasComponent,
    GestionZonasComponent,
    GestionEstablecimientosComponent,
    HeaderComponent,
    EstablecimientosComponent,
    LoginComponent,
    RegistroComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,RouteRoutingModule,HttpClientModule,FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACkZ9Uz0mI1C9Cdrk-ENY4xLVjK3QNsUQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
