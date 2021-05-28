import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modulos/login/login.component';
import { RegistroUsuarioComponent } from './Modulos/login/registro-usuario/registro-usuario.component';
import { DetalleUsuarioComponent } from './Modulos/usuarios/detalle-usuario/detalle-usuario.component';
import { EditarUsuarioComponent } from './Modulos/usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './Modulos/usuarios/listar-usuario/listar-usuario.component';
import { RegistrarUsuarioComponent } from './Modulos/usuarios/registrar-usuario/registrar-usuario.component';
import { VerPerfilComponent } from './Modulos/usuarios/ver-perfil/ver-perfil.component';

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
        component: ListarUsuarioComponent
      },
      {
        path: 'registrar',
        component: RegistrarUsuarioComponent
      },
      {
        path: 'editar/:variable',
        component: EditarUsuarioComponent
      },
      {
        path: 'detalle/:variale',
        component: DetalleUsuarioComponent
      },
      {
        path: 'perfil',
        component: VerPerfilComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
