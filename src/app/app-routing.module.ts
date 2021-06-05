import { PropietarioAuthGuard } from './Components/auth/propietario-auth.guard';
import { AdminGuard } from './Components/auth/admin.guard';
import { AuthGuard } from './Components/auth/auth.guard';
import { DetallevehiculoComponent } from './Modulos/vehiculos/detallevehiculo/detallevehiculo.component';
import { ListarVehiculoComponent } from './Modulos/vehiculos/listar-vehiculo/listar-vehiculo.component';
import { CrearVehiculoComponent } from './Modulos/vehiculos/crear-vehiculo/crear-vehiculo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modulos/login/login.component';
import { RegistroUsuarioComponent } from './Modulos/login/registro-usuario/registro-usuario.component';
import { DetalleConductorComponent } from './Modulos/usuarios/conductor/detalle-conductor/detalle-conductor.component';
import { EditarConductorComponent } from './Modulos/usuarios/conductor/editar-conductor/editar-conductor.component';
import { ListarConductorComponent } from './Modulos/usuarios/conductor/listar-conductor/listar-conductor.component';
import { RegistrarConductorComponent } from './Modulos/usuarios/conductor/registrar-conductor/registrar-conductor.component';
import { VerperfilConductorComponent } from './Modulos/usuarios/conductor/verperfil-conductor/verperfil-conductor.component';
import { DetalleUsuarioComponent } from './Modulos/usuarios/detalle-usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './Modulos/usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './Modulos/usuarios/listar-usuario/listar-usuario.component';
import { RegistrarUsuarioComponent } from './Modulos/usuarios/registrar-usuario/registrar-usuario.component';
import { VerPerfilComponent } from './Modulos/usuarios/ver-perfil/ver-perfil.component';
import { ListarServiciosComponent } from './Modulos/servicios/listar-servicios/listar-servicios.component';
import { GeolocalizacionComponent } from './Modulos/servicios/geolocalizacion/geolocalizacion.component';
import { DetalleServiciosComponent } from './Modulos/servicios/detalle-servicios/detalle-servicios.component';
import { PedirServicioComponent } from './Modulos/servicios/pedir-servicio/pedir-servicio.component';
import { VehiculosDisponiblesComponent } from './Modulos/servicios/vehiculos-disponibles/vehiculos-disponibles.component';
import { AceptarServicioComponent } from './Modulos/servicios/aceptar-servicio/aceptar-servicio.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Inicio/Login' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'Inicio',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'Login'
      },
      {path: 'registro', component: RegistroUsuarioComponent},
      {
        path: 'Login',
        component: LoginComponent
      }
    ]},
    { path: 'usuarios',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'listar'
      },
      {
        path: 'listar',
        component: ListarUsuarioComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'registrar',
        component: RegistrarUsuarioComponent
      },
      {
        path: 'editar/:variable',
        component: EditarUsuarioComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'detalle/:variale',
        component: DetalleUsuarioComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'perfil',
        component: VerPerfilComponent,
        canActivate: [AuthGuard]
      }
    ]},
    { path: 'conductores',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'listar'
      },
      {
        path: 'listar',
        component: ListarConductorComponent
      },
      {
        path: 'registrar',
        component: RegistrarConductorComponent
      },
      {
        path: 'editar',
        component: EditarConductorComponent
      },
      {
        path: 'detalle',
        component: DetalleConductorComponent
      },
      {
        path: 'perfil',
        component: VerperfilConductorComponent
      }
    ]
  },
  { path: 'vehiculos',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'listar'
      },
      {
        path: 'crearVehiculo',
        component: CrearVehiculoComponent,
        canActivate: [PropietarioAuthGuard]
      },
      {
        path: 'listar',
        component: ListarVehiculoComponent,
        canActivate: [PropietarioAuthGuard]
      },
      {
        path: 'detalle/:id',
        component: DetallevehiculoComponent,
        canActivate: [PropietarioAuthGuard]
      }
    ]},

  {
    path: 'servicios',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'listar'
      },
      {
        path: 'listar',
        component: ListarServiciosComponent
      },
      {
        path: 'geolocalizacion',
        component: GeolocalizacionComponent
      },
      {
        path: 'detalle',
        component: DetalleServiciosComponent
      },
      {
        path: 'pedir',
        component: PedirServicioComponent
      },
      {
        path: 'vehiculos',
        component: VehiculosDisponiblesComponent
      },
      {
        path: 'aceptar',
        component: AceptarServicioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
