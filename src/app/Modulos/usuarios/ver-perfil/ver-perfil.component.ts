import { GestionUsuarioService } from './../servicios/gestion-usuario.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

  constructor(private router: Router, public gestionUsuarioService: GestionUsuarioService, private toast: ToastrService) { }
  perfilUsuario;

  // tslint:disable-next-line: typedef
  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('Inicio/Login');
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
  }

}
