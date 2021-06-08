import { GestionUsuarioService } from './../servicios/gestion-usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

  constructor(private router: Router, public gestionUsuarioService: GestionUsuarioService, private toast: ToastrService,
              public modal: NgbModal, private formBuilder: FormBuilder) { }
  perfilUsuario;

  // tslint:disable-next-line: typedef
  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('Inicio/Login/');
    window.location.reload();
  }
  ngOnInit(): void {
    this.gestionUsuarioService.obtenerPerfil().subscribe(
      res => {
        this.perfilUsuario = res;
      },
      err => {
        console.log(err);
      }
    );
    this.gestionUsuarioService.formularioRegistroUsuario = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.pattern(this.exRegularCorreo)]],
      NombreUsuario: ['', [Validators.required , Validators.minLength(4), Validators.maxLength(20)]],
      Celular: ['', [Validators.required, Validators.pattern(this.exRegularNumeros), Validators.minLength(5)]],
      Direccion: ['', [Validators.required]]
    });
  }
  // tslint:disable-next-line: typedef
  openFunciones(contenido){
    this.modal.open(contenido, { centered: true, windowClass: 'oscuro', scrollable: true});
  }
  // tslint:disable-next-line: member-ordering
  exRegularLetras = '^[a-zA-ZÀ -ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ -ÿ\u00f1\u00d1]*)*[a-zA-ZÀ -ÿ\u00f1\u00d1]+$';
  // tslint:disable-next-line: member-ordering
  exRegularCorreo = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';
  // tslint:disable-next-line: member-ordering
  exRegularNumeros = '^[0-9]*$';
  // tslint:disable-next-line: typedef
  get Email(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls.Email;
  }
  // tslint:disable-next-line: typedef
  get Celular(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls.Celular;
  }
  // tslint:disable-next-line: typedef
  get Direccion(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls.Direccion;
  }
  // tslint:disable-next-line: typedef
  get NombreUsuario(){
    return this.gestionUsuarioService.formularioRegistroUsuario.controls.NombreUsuario;
  }
}
