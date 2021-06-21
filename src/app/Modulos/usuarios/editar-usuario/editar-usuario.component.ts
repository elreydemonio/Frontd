import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GestionUsuarioService } from '../servicios/gestion-usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  id: any;
  editarDetalle;
  constructor(
    public gestionUsuarioService:GestionUsuarioService,
    private rutaActiva:ActivatedRoute,
     private formBuilder:FormBuilder,
     private toastr:ToastrService) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.gestionUsuarioService.EditarDetalle(this.id).subscribe(
      res => {
        this.editarDetalle = res;
      },
      err => {
        console.log(err);
      }
    );
    this.gestionUsuarioService.ListaGenero();
    this.gestionUsuarioService.ListaTipoDocumento();
    this.gestionUsuarioService.ListaRol();
    this.gestionUsuarioService.formularioRegistroUsuario = this.formBuilder.group({
      Id:[this.id],
      IdEstadoUsuario:[""],
      IdTipoDocumento:["", [Validators.required]],
      IdRol:["", [Validators.required]],
      IdGenero:["", [Validators.required]],
      Direccion:["", [Validators.required]],
      Email:["", [Validators.required, Validators.pattern(this.exRegularCorreo)]],
      NombreUsuario:["", [Validators.required , Validators.minLength(4), Validators.maxLength(20)]],
      Nombre:["", [Validators.required, Validators.pattern(this.exRegularLetras) , Validators.minLength(3), Validators.maxLength(30)]],
      Apellido:["", [Validators.required, Validators.pattern(this.exRegularLetras) , Validators.minLength(4), Validators.maxLength(50)]],
      // tslint:disable-next-line: max-line-length
      NumeroDocumento: ['', [Validators.required, Validators.pattern(this.exRegularNumeros) , Validators.minLength(5), Validators.maxLength(15)]],
      Celular:["", [Validators.required, Validators.pattern(this.exRegularNumeros), Validators.minLength(5)]]
    })
  }

  exRegularLetras: any = "^[a-zA-ZÀ -ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ -ÿ\u00f1\u00d1]*)*[a-zA-ZÀ -ÿ\u00f1\u00d1]+$";
  exRegularCorreo: any = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  exRegularNumeros: any = "^[0-9]*$";

  get NombreUsuario(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls["NombreUsuario"];
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
    this.gestionUsuarioService.EditarUsuario().subscribe(
      res=>{
        this.gestionUsuarioService.formularioRegistroUsuario.reset();
        this.toastr.success("Se ha actualizado el usuario");
        //window.location.href = "usuarios/";
      },
      err=>{
        this.toastr.error(err);
      }
    );
  }

}
