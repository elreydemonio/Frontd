import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GestionUsuarioService } from '../servicios/gestion-usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  constructor(public gestionUsuarioService:GestionUsuarioService, private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.gestionUsuarioService.ListaGenero();
    this.gestionUsuarioService.ListaTipoDocumento();
    this.gestionUsuarioService.ListaRol();
    this.gestionUsuarioService.formularioRegistroUsuario = this.formBuilder.group({
    Id:[""],
    IdEstadoUsuario:[""],
    IdTipoDocumento:["", [Validators.required]],
    IdRol:["", [Validators.required]],
    IdGenero:["", [Validators.required]],
    Direccion:["", [Validators.required]],
    Email:["", [Validators.required, Validators.pattern(this.exRegularCorreo)]],
    NombreUsuario:["", [Validators.required , Validators.minLength(4), Validators.maxLength(20)]],
    Password:["", [Validators.required, Validators.pattern(this.exRegularPassword)]],
    Nombre:["", [Validators.required, Validators.pattern(this.exRegularLetras) , Validators.minLength(3), Validators.maxLength(30)]],
    Apellido:["", [Validators.required, Validators.pattern(this.exRegularLetras) , Validators.minLength(4), Validators.maxLength(50)]],
    NumeroDocumento:["", [Validators.required, Validators.pattern(this.exRegularNumeros) , Validators.minLength(5), Validators.maxLength(15)]],
    Celular:["", [Validators.required, Validators.pattern(this.exRegularNumeros), Validators.minLength(5)]]
    })
  }

  exRegularLetras: any = "^[a-zA-Z\u00f1\u00d1 ]*$";
  exRegularCorreo: any = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  exRegularNumeros: any = "^[0-9]*$";
  exRegularPassword: any = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&/()])[A-Za-z\d*[$@#$!%*?&].{8,15}[^'\s]";

  get NombreUsuario(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["NombreUsuario"];
  }

  get Password(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["Password"];
  }

  get IdRol(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["IdRol"];
  }

  get Nombre(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["Nombre"];
  }

  get IdTipoDocumento(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["IdTipoDocumento"];
  }

  get IdGenero(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["IdGenero"];
  }

  get Email(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["Email"];
  }

  get Apellido(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["Apellido"];
  }

  get NumeroDocumento(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["NumeroDocumento"];
  }

  get Celular(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["Celular"];
  }

  get Direccion(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["Direccion"];
  }

  onSubmit(){
    this.gestionUsuarioService.usuario = this.gestionUsuarioService.formularioRegistroUsuario.value;

    if(this.gestionUsuarioService.usuario.Id === "")
      this.guardarUsuario();
  }

  guardarUsuario(){
    this.gestionUsuarioService.guardarUsuario().subscribe(
      res=>{
        this.gestionUsuarioService.formularioRegistroUsuario.reset();
        this.toastr.success('Registro correcto');
      },
      err=>{
        console.log(err)
      }
    );
  }

}
