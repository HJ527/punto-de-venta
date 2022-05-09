import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuntoDeVentaComponent } from './punto-de-venta/punto-de-venta.component';
import { VenderRoutingModule } from './vender-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    PuntoDeVentaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    VenderRoutingModule
  ]
})
export class VenderModule { }
