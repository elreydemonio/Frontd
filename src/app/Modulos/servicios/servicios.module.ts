import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarServiciosComponent } from './listar-servicios/listar-servicios.component';
import { DetalleServiciosComponent } from './detalle-servicios/detalle-servicios.component';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';
import { PedirServicioComponent } from './pedir-servicio/pedir-servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculosDisponiblesComponent } from './vehiculos-disponibles/vehiculos-disponibles.component';
import { AceptarServicioComponent } from './aceptar-servicio/aceptar-servicio.component';



@NgModule({
  declarations: [
    ListarServiciosComponent,
    DetalleServiciosComponent,
    GeolocalizacionComponent,
    PedirServicioComponent,
    VehiculosDisponiblesComponent,
    AceptarServicioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GeolocalizacionComponent
  ],
})
export class ServiciosModule { }
