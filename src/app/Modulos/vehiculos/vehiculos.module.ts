import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearVehiculoComponent } from './crear-vehiculo/crear-vehiculo.component';
import { ListarVehiculoComponent } from './listar-vehiculo/listar-vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {  MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { DetallevehiculoComponent } from './detallevehiculo/detallevehiculo.component';
import { PaginatePipe } from './pipes/paginate.pipe';
@NgModule({
  declarations: [
    CrearVehiculoComponent,
    ListarVehiculoComponent,
    DetallevehiculoComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatPaginatorIntl,
    MatPaginatorModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    MatPaginatorModule
  ]
})
export class VehiculosModule { }
