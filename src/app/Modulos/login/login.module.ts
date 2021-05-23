import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
