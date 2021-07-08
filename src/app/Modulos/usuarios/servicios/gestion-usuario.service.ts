import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { exit } from 'process';
import { Conductor } from '../interfaces/conductor';
import { Detalleusuario } from '../interfaces/detalleusuario';
import { Editardetalle } from '../interfaces/editardetalle';
import { Genero } from '../interfaces/genero';
import { Roles } from '../interfaces/roles';
import { Tipodocumento } from '../interfaces/tipodocumento';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class GestionUsuarioService {
  readonly rootURL = 'https://localhost:44366/api';
  formularioRegistroUsuario: FormGroup;
  usuario: Usuario;
  listaUsuarios: Usuario[];
  tipoDocumento: Tipodocumento[];
  genero: Genero[];
  roles: Roles[];
  detalleusuario: Detalleusuario;
  editardetalle: Editardetalle;
  Conductor: Conductor;
  editardetalles: Editardetalle[];
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  listarUsuarios(){
    this.http.get(this.rootURL + '/Usuarios/ListarCliPro')
    .toPromise().then(res => this.listaUsuarios = res as Usuario[]);
  }
  // tslint:disable-next-line: typedef
  ListaTipoDocumento(){
    this.http.get(this.rootURL + '/Usuarios/ListarTipoDocumento')
    .toPromise()
    .then(res => this.tipoDocumento = res as Tipodocumento[]);
  }
  // tslint:disable-next-line: typedef
  ListaGenero(){
    this.http.get(this.rootURL + '/Usuarios/ListarGenero')
    .toPromise()
    .then(res => this.genero = res as Genero[]);
  }
  // tslint:disable-next-line: typedef
  ListaRol(){
    this.http.get(this.rootURL + '/Usuarios/ListarRoles')
    .toPromise()
    .then(res => this.roles = res as Roles[]);
  }
  // tslint:disable-next-line: typedef
  EditarEstado(IdEstadoUsuario: any, Id){
    return this.http.put(this.rootURL + '/Usuarios/CambiarEstado/' + IdEstadoUsuario, Id);
  }
  // tslint:disable-next-line: typedef
  guardarUsuario(){
    this.usuario = this.formularioRegistroUsuario.value;
    Number(this.usuario.IdEstadoUsuario = 1);
    Number(this.usuario.NombreDocumento);
    Number(this.usuario.NombreGenero);
    Number(this.usuario.NombreRol);
    Number(this.usuario.Celular);
    Number(this.usuario.NumeroDocumento);
    return this.http.post(this.rootURL + '/Usuarios/Registro/', this.usuario);
  }
  // tslint:disable-next-line: typedef
  EditarUsuario(){
    this.usuario = this.formularioRegistroUsuario.value;
    Number(this.usuario.IdEstadoUsuario = 1);
    Number(this.usuario.NombreDocumento);
    Number(this.usuario.NombreGenero);
    Number(this.usuario.NombreRol);
    Number(this.usuario.Celular);
    Number(this.usuario.NumeroDocumento);
    if (this.usuario.Id === "") {
      console.log(this.usuario);
    }
    return this.http.put(this.rootURL + '/Usuarios/EditarClieProp/' + this.usuario.Id, this.usuario);
  }

  // tslint:disable-next-line: typedef
  detalleUsuario(id: string){
    this.http.get(this.rootURL + '/Usuarios/DetalleUsuario/' + id)
    .toPromise()
    .then(res => this.detalleusuario = res as Detalleusuario);
  }

  // tslint:disable-next-line: typedef
  editarDetalle(id: string){
    this.http.get(this.rootURL + '/Usuarios/EditarDetalle/' + id)
    .toPromise()
    .then(res => this.editardetalles = res as Editardetalle[]);
  }
  // tslint:disable-next-line: typedef
  obtenerPerfil(){
    return this.http.get(this.rootURL + '/Usuarios/Perfil');
  }
  // tslint:disable-next-line: typedef
  ListarConductorVehiculo(id: string){
    return this.http.get(this.rootURL + '/Vehiculos/ListarConductor/' + id);
  }
  listrConductor(){
    return this.http.get((this.rootURL + '/Usuarios/ListarConductor'));
  }
  GuardarConductor(codigo: string){
    this.Conductor = this.formularioRegistroUsuario.value;
    Number(this.Conductor.IdEstado = 1);
    Number(this.Conductor.NumeroDocumento);
    Number(this.Conductor.IdGenero);
    Number(this.Conductor.IdRol = 0);
    Number(this.Conductor.Celular);
    Number(this.Conductor.IdInfo = 0);
    Number(this.Conductor.NumeroDocumento);
    this.Conductor.CodigoV = codigo;
    console.log(this.Conductor);
    return this.http.post(this.rootURL + '/Usuarios/AgregarConductor', this.Conductor);
  }
  registrarImaganes(file: File){
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.rootURL + '/Vehiculos/Imagenes', formData);
  }
  // tslint:disable-next-line: typedef
  DetalleConductor(id: string){
    return this.http.get(this.rootURL + '/Usuarios/DetalleUsuarioConductor/' + id);
  }
  // tslint:disable-next-line: typedef
  EditarEstadoConductor(IdEstadoUsuario: any, Id){
    return this.http.put(this.rootURL + '/Usuarios/CambiarEstadoConductor/' + IdEstadoUsuario, Id);
  }
}
