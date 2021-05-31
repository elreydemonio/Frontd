import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../interfaz/usuario';
import { ConfiguracionService } from './configuracion.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient, private configuracion: ConfiguracionService, private formBuilder: FormBuilder) { }

  usuario: Usuario;

  formularioRegistroUsuario = this.formBuilder.group({
    NombreUsuario: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.configuracion.exLetrasNumeros)]],
    Email: ['', [Validators.required, Validators.maxLength(40), Validators.pattern(this.configuracion.exRegularCorreo)]],
    Nombre: ['', [Validators.required, Validators.maxLength(40), Validators.pattern(this.configuracion.exRegularLetras)]],
    Apellido: ['', [Validators.required, Validators.maxLength(40), Validators.pattern(this.configuracion.exRegularLetras)]],
    Direccion: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(this.configuracion.exRegularLetras)]],
    IdEstado: ['', [Validators.required]],
    IdRol: ['', [Validators.required]],
    NumeroDocumento: ['', [Validators.required, Validators.pattern(this.configuracion.exRegularNumeros)]],
    Celular: ['', [Validators.required, Validators.pattern(this.configuracion.exRegularNumeros)]],
    IdUsuario: ['', [Validators.required]],
    IdTipoDocumento: ['', [Validators.required]],
    IdGenero: ['', [Validators.required]],
    Password: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.configuracion.exRegularPassword)]],
    ConfirmarPassword: ['', [Validators.required]]}, {validator: this.compararPasswords.bind(this)}
  );

  formularioLogin = this.formBuilder.group({

    NombreUsuario: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(this.configuracion.exLetrasNumeros)]],
    Password: ['', [Validators.required, Validators.maxLength(20)]]

  });
  // tslint:disable-next-line: typedef
  get IdTipoDocumento(){
    return this.formularioLogin.controls.IdTipoDocumento;
  }
  // tslint:disable-next-line: typedef
  get NombreUsuarioLogin(){
    return this.formularioLogin.controls.NombreUsuario;
  }
  // tslint:disable-next-line: typedef
  get PasswordLogin(){
    return this.formularioLogin.controls.Password;
  }
  // tslint:disable-next-line: typedef
  get Email(){
    return this.formularioRegistroUsuario.controls.Email;
  }
  // tslint:disable-next-line: typedef
  get Nombre(){
    return this.formularioRegistroUsuario.controls.Nombre;
  }
  // tslint:disable-next-line: typedef
  get NombreUsuario(){
    return this.formularioRegistroUsuario.controls.NombreUsuario;
  }
  // tslint:disable-next-line: typedef
  get IdUsuario(){
    return this.formularioRegistroUsuario.controls.IdUsuario;
  }
  // tslint:disable-next-line: typedef
  get IdEstado(){
    return this.formularioRegistroUsuario.controls.IdEstado;
  }
  // tslint:disable-next-line: typedef
  get IdRol(){
    return this.formularioRegistroUsuario.controls.IdRol;
  }
  // tslint:disable-next-line: typedef
  get Password(){
    return this.formularioRegistroUsuario.controls.Password;
  }
  // tslint:disable-next-line: typedef
  get ConfirmarPassword(){
    return this.formularioRegistroUsuario.controls.ConfirmarPassword;
  }
  // tslint:disable-next-line: typedef
  get Apellido(){
    return this.formularioRegistroUsuario.controls.Apellido;
  }
  // tslint:disable-next-line: typedef
  get NumeroDocumento(){
    return this.formularioRegistroUsuario.controls.NumeroDocumento;
  }
  // tslint:disable-next-line: typedef
  get Celular(){
    return this.formularioRegistroUsuario.controls.Celular;
  }
  // tslint:disable-next-line: typedef
  get IdGenero(){
    return this.formularioRegistroUsuario.controls.IdGenero;
  }
  // tslint:disable-next-line: typedef
  get Direccion(){
    return this.formularioRegistroUsuario.controls.Direccion;
  }
  // tslint:disable-next-line: typedef
  compararPasswords(formGroup: FormGroup){
    const password  = formGroup.get('Password');
    const confirmarPassword  = formGroup.get('ConfirmarPassword');
    if (confirmarPassword.errors == null || 'passwordsDiferentes' in confirmarPassword) {
      // tslint:disable-next-line: triple-equals
      if (password.value != confirmarPassword.value){
        confirmarPassword.setErrors({passwordsDiferentes: true});
      }else{
        confirmarPassword.setErrors(null);
      }
    }
  }
  // tslint:disable-next-line: typedef
  registrarUsuario(){
    this.usuario = this.formularioRegistroUsuario.value;
    delete this.usuario['ConfirmarPassword'];

    return this.http.post(this.configuracion.rootURL + '/Usuarios/Registro', this.usuario);

  }
  // tslint:disable-next-line: typedef
  login(){
    this.usuario = this.formularioLogin.value;
    delete this.usuario['ID_USUARIO'];
    delete this.usuario['Email'];
    delete this.usuario['Nombre'];

    return this.http.post(this.configuracion.rootURL + '/Usuarios/Login', this.usuario);
  }
  // tslint:disable-next-line: typedef
  obtenerPerfil(){
    return this.http.get(this.configuracion.rootURL + '/Usuarios/Perfil');

   }
}
