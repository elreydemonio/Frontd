import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {  MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    CrearVehiculoComponent,
    ListarVehiculoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorIntl,
    MatPaginatorModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule
  ]
})
export class VehiculosModule { }
