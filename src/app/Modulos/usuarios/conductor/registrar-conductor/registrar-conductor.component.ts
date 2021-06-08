import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GestionUsuarioService } from '../../servicios/gestion-usuario.service';

import { Conductor } from '../../interfaces/conductor';
import { ActivatedRoute } from '@angular/router';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-registrar-conductor',
  templateUrl: './registrar-conductor.component.html',
  styleUrls: ['./registrar-conductor.component.css']
})
export class RegistrarConductorComponent implements OnInit {

  constructor(private http:HttpClient, public gestionServicioUsuarios: GestionUsuarioService, private formBuilder:FormBuilder, private toastr: ToastrService, private rutaActiva:ActivatedRoute) { }
  file: File;
  conductor:Conductor;
  sw: number;
  id: any;
  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.gestionServicioUsuarios.ListaGenero();
    this.gestionServicioUsuarios.ListaTipoDocumento();
    this.gestionServicioUsuarios.ListaRol();
    this.gestionServicioUsuarios.formularioRegistroUsuario = this.formBuilder.group({
      
      id:[""],
      IdEstado:[""],
      IdTipoDocumento:["", [Validators.required]],
      IdRol:["", [Validators.required]],
      IdGenero:["", [Validators.required]],
      Direccion:["", [Validators.required]],
      Email:["", [Validators.required, Validators.pattern(this.exRegularCorreo)]],
      NombreUsuario:["", [Validators.required , Validators.minLength(4), Validators.maxLength(20)]],
      Password:["", [Validators.required]],
      Nombre:["", [Validators.required, Validators.pattern(this.exRegularLetras) , Validators.minLength(3), Validators.maxLength(30)]],
      Apellido:["", [Validators.required, Validators.pattern(this.exRegularLetras) , Validators.minLength(4), Validators.maxLength(50)]],
      NumeroDocumento:["", [Validators.required, Validators.pattern(this.exRegularNumeros) , Validators.minLength(5), Validators.maxLength(15)]],
      Celular:["", [Validators.required, Validators.pattern(this.exRegularNumeros), Validators.minLength(5)]],
      IdInfo:["", [Validators.required]],
      //FechaInicio:["", [Validators.required]],
      //FechaFin:[""],
      FotoConductor:["", [Validators.required]],
      IdConductor:["", [Validators.required]],
      CodigoV:["", [Validators.required]]
    })
  }

  exRegularLetras: any = "^[a-zA-ZÀ -ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ -ÿ\u00f1\u00d1]*)*[a-zA-ZÀ -ÿ\u00f1\u00d1]+$";
  exRegularCorreo: any = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  exRegularNumeros: any = "^[0-9]*$";

  get NombreUsuario(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["NombreUsuario"];
  }

  get Password(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["Password"];
  }

  get IdRol(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["IdRol"];
  }

  get Nombre(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["Nombre"];
  }

  get IdTipoDocumento(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["IdTipoDocumento"];
  }

  get IdGenero(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["IdGenero"];
  }

  get Email(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["Email"];
  }

  get Apellido(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["Apellido"];
  }

  get NumeroDocumento(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["NumeroDocumento"];
  }

  get Celular(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["Celular"];
  }

  get Direccion(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["Direccion"];
  }

  get IdInfo(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["IdInfo"];
  }

  /*get FechaInicio(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["FechaInicio"];
  }

  get FechaFin(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["FechaFin"];
  }*/

  get FotoConductor(){
    return this.gestionServicioUsuarios.formularioRegistroUsuario.controls["FotoConductor"];
  }

  url: any= '';
  readUrl(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      this.file = event.target.files[0];
      console.log(this.file);
      reader.onload = (event: any) => {
        this.url = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(){
    this.sw = 0;
    this.gestionServicioUsuarios.registrarImaganes(this.file).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.gestionServicioUsuarios.GuardarConductor(this.id).subscribe(
      es=>{
        this.gestionServicioUsuarios.formularioRegistroUsuario.reset();
        this.toastr.success("Registro exitoso");
       
      },
      err=>{
        this.toastr.error("Ya hay un registro activo en este vehiculo");
      });
    }
}
