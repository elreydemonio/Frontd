import { ConductorAuthGuard } from './Components/auth/conductor-auth.guard';
import { ProAdminGuard } from './Components/auth/pro-admin.guard';
import { ListarConductorVehiculosComponent } from './Modulos/usuarios/conductor/listar-conductor-vehiculos/listar-conductor-vehiculos.component';
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
import { ModuloUsuariosComponent } from './Modulos/ayuda/modulo-usuarios/modulo-usuarios.component';
import { ModuloVehiculosComponent } from './Modulos/ayuda/modulo-vehiculos/modulo-vehiculos.component';
import { ModuloServiciosComponent } from './Modulos/ayuda/modulo-servicios/modulo-servicios.component';
import { EditarVehiculoComponent } from './Modulos/vehiculos/editar-vehiculo/editar-vehiculo.component';

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
        path: 'registrar/:variable',
        component: RegistrarConductorComponent
      },
      {
        path: 'editar',
        component: EditarConductorComponent,
        canActivate: [PropietarioAuthGuard]
      },
      {
        path: 'detalle/:variable',
        component: DetalleConductorComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'perfil',
        component: VerperfilConductorComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'ListarConductoresVehiculos/:variable',
        component: ListarConductorVehiculosComponent,
        canActivate: [PropietarioAuthGuard]
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
        canActivate: [ProAdminGuard]
      },
      {
        path: 'detalle/:id',
        component: DetallevehiculoComponent,
        canActivate: [ProAdminGuard]
      },
      {
        path: 'editar/:id',
        component: EditarVehiculoComponent,
        canActivate: [ProAdminGuard]
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
        path: 'detalle/:variable',
        component: DetalleServiciosComponent
      },
      {
        path: 'pedir',
        component: PedirServicioComponent
      },
      {
        path: 'vehiculos/:variable',
        component: VehiculosDisponiblesComponent
      },
      {
        path: 'aceptar',
        component: AceptarServicioComponent,
        canActivate: [ConductorAuthGuard]
      }
    ]
  },
  {
    path: 'ayuda',
    children: [
      {
        path: 'usuarios',
        component: ModuloUsuariosComponent
      },
      {
        path: 'vehiculos',
        component: ModuloVehiculosComponent
      },
      {
        path: 'servicios',
        component: ModuloServiciosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
