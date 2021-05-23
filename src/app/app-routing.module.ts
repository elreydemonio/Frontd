import { ListarVehiculoComponent } from './Modulos/vehiculos/listar-vehiculo/listar-vehiculo.component';
import { CrearVehiculoComponent } from './Modulos/vehiculos/crear-vehiculo/crear-vehiculo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modulos/login/login.component';
import { RegistroUsuarioComponent } from './Modulos/login/registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'Vehiculos',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'Listar'
      },
      {
        path: 'Crear',
        component: CrearVehiculoComponent
      },
      {
        path: 'Listar',
        component: ListarVehiculoComponent
      }
    ]
  }
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  {path: 'login', component: LoginComponent,
    children: [
      {path: 'registro', component: RegistroUsuarioComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
