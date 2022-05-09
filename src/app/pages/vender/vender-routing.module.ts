import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PuntoDeVentaComponent } from './punto-de-venta/punto-de-venta.component';

const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:PuntoDeVentaComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenderRoutingModule { }
