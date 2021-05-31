import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { AuthInterceptor } from 'src/app/Components/auth/auth.interceptor';



@NgModule({
  declarations: [
      ListarUsuarioComponent,
      RegistrarUsuarioComponent,
      EditarUsuarioComponent,
      DetalleUsuarioComponent,
      VerPerfilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    ToastrModule.forRoot()
  ],
  exports: [
    ListarUsuarioComponent,
    RegistrarUsuarioComponent,
    EditarUsuarioComponent,
    DetalleUsuarioComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class UsuariosModule { }
