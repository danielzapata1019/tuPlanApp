import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './home//categorias/categorias.component';
import { ZonasComponent } from './home/zonas/zonas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    CategoriasComponent,
    ZonasComponent
  ],
  imports: [
    BrowserModule,RouteRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
