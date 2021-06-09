import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarServiciosComponent } from './listar-servicios/listar-servicios.component';
import { DetalleServiciosComponent } from './detalle-servicios/detalle-servicios.component';
import { GeolocalizacionComponent } from './geolocalizacion/geolocalizacion.component';
import { PedirServicioComponent } from './pedir-servicio/pedir-servicio.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculosDisponiblesComponent } from './vehiculos-disponibles/vehiculos-disponibles.component';
import { AceptarServicioComponent } from './aceptar-servicio/aceptar-servicio.component';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { VehiculosdisponiblesComponent } from './interfaces/vehiculosdisponibles/vehiculosdisponibles.component';
import { ServiciosAceptarComponent } from './servicios-aceptar/servicios-aceptar.component';



@NgModule({
  declarations: [
    ListarServiciosComponent,
    DetalleServiciosComponent,
    GeolocalizacionComponent,
    PedirServicioComponent,
    VehiculosDisponiblesComponent,
    AceptarServicioComponent,
    VehiculosdisponiblesComponent,
    ServiciosAceptarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    BrowserModule
  ],
  exports: [
    GeolocalizacionComponent
  ],
})
export class ServiciosModule { }
