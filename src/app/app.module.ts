import { DetalleConductorComponent } from './Modulos/usuarios/conductor/detalle-conductor/detalle-conductor.component';
import { ListarConductorVehiculosComponent } from './Modulos/usuarios/conductor/listar-conductor-vehiculos/listar-conductor-vehiculos.component';
import { LoginComponent } from './Modulos/login/login.component';
import { RegistroUsuarioComponent } from './Modulos/login/registro-usuario/registro-usuario.component';
import { CrearVehiculoComponent } from './Modulos/vehiculos/crear-vehiculo/crear-vehiculo.component';
import { ListarVehiculoComponent } from './Modulos/vehiculos/listar-vehiculo/listar-vehiculo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ListarUsuarioComponent } from './Modulos/usuarios/listar-usuario/listar-usuario.component';
import { RegistrarUsuarioComponent } from './Modulos/usuarios/registrar-usuario/registrar-usuario.component';
import { EditarUsuarioComponent } from './Modulos/usuarios/editar-usuario/editar-usuario.component';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DetalleUsuarioComponent } from './Modulos/usuarios/detalle-usuario/detalle-usuario.component';
import { ListarConductorComponent } from './Modulos/usuarios/conductor/listar-conductor/listar-conductor.component';
import { DetallevehiculoComponent } from './Modulos/vehiculos/detallevehiculo/detallevehiculo.component';
import { AuthInterceptor } from './Components/auth/auth.interceptor';
import { RegistrarConductorComponent } from './Modulos/usuarios/conductor/registrar-conductor/registrar-conductor.component';
import { GeolocalizacionComponent } from './Modulos/servicios/geolocalizacion/geolocalizacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListarServiciosComponent } from './Modulos/servicios/listar-servicios/listar-servicios.component';
import { DetalleServiciosComponent } from './Modulos/servicios/detalle-servicios/detalle-servicios.component';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { PedirServicioComponent } from './Modulos/servicios/pedir-servicio/pedir-servicio.component';
import { VehiculosDisponiblesComponent } from './Modulos/servicios/vehiculos-disponibles/vehiculos-disponibles.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    RegistrarUsuarioComponent,
    PedirServicioComponent,
    EditarUsuarioComponent,
    DetalleUsuarioComponent,
    DetalleServiciosComponent,
    ListarConductorComponent,
    ListarVehiculoComponent,
    ListarServiciosComponent,
    CrearVehiculoComponent,
    DetallevehiculoComponent,
    RegistroUsuarioComponent,
    GeolocalizacionComponent,
    LoginComponent,
    ListarConductorVehiculosComponent,
    DetalleConductorComponent,
    VehiculosDisponiblesComponent,
    RegistrarConductorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
    MatPaginatorModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
