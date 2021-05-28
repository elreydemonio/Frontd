import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  readonly rootURL= "https://localhost:44379/api";

  formularioRegistroUsuario: FormGroup;
  usuario:Usuario;
  listaUsuarios:Usuario[];
  tipoDocumento:Tipodocumento[];
  genero:Genero[];
  roles:Roles[];
  detalleusuario:Detalleusuario;
  editardetalle:Editardetalle;

  constructor(private http:HttpClient) { }

  listarUsuarios(){
    this.http.get(this.rootURL + '/Usuarios/ListarCliPro')
    .toPromise().then(res=> this.listaUsuarios = res as Usuario[])
  }

  ListaTipoDocumento(){
    this.http.get(this.rootURL + '/Usuarios/ListarTipoDocumento')
    .toPromise()
    .then(res => this.tipoDocumento = res as Tipodocumento[]);
  }

  ListaGenero(){
    this.http.get(this.rootURL + '/Usuarios/ListarGenero')
    .toPromise()
    .then(res => this.genero = res as Genero[]);
  }

  ListaRol(){
    this.http.get(this.rootURL + '/Usuarios/ListarRoles')
    .toPromise()
    .then(res => this.roles = res as Roles[]);
  }

  EditarEstado(IdEstadoUsuario: any, Id){
    return this.http.put(this.rootURL + '/Usuarios/CambiarEstado/' + IdEstadoUsuario, Id);
  }

  guardarUsuario(){
    this.usuario = this.formularioRegistroUsuario.value;
    Number(this.usuario.IdEstadoUsuario = 1);
    Number(this.usuario.NombreDocumento);
    Number(this.usuario.NombreGenero);
    Number(this.usuario.NombreRol);
    Number(this.usuario.Celular);
    Number(this.usuario.NumeroDocumento);
    if(this.usuario.Id=== "")
    console.log(this.usuario);

    return this.http.post(this.rootURL + '/Usuarios/Registro/', this.usuario);
  }

  EditarUsuario(){
    this.usuario = this.formularioRegistroUsuario.value;
    Number(this.usuario.IdEstadoUsuario = 1);
    Number(this.usuario.NombreDocumento);
    Number(this.usuario.NombreGenero);
    Number(this.usuario.NombreRol);
    Number(this.usuario.Celular);
    Number(this.usuario.NumeroDocumento);
    if (this.usuario.Id === "")
    console.log(this.usuario);
    return this.http.put(this.rootURL + '/Usuarios/EditarClieProp/' + this.usuario.Id, this.usuario);
  }

  detalleUsuario(id: string){
    this.http.get(this.rootURL + '/Usuarios/DetalleUsuario/' + id)
    .toPromise()
    .then(res=> this.detalleusuario = res as Detalleusuario);
  }

  editarDetalle(id: string){
    this.http.get(this.rootURL + '/Usuarios/EditarDetalle' + id)
    .toPromise()
    .then(res=> this.editardetalle = res as Editardetalle)
  }
}
