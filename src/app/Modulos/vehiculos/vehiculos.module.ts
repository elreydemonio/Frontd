import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';



@NgModule({
  declarations: [
    CrearVehiculoComponent,
    ListarVehiculoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VehiculosModule { }
