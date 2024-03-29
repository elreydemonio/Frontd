import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GestionUsuarioService } from '../servicios/gestion-usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  constructor(public gestionUsuarioService:GestionUsuarioService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.gestionUsuarioService.listarUsuarios();
  }

  // tslint:disable-next-line: typedef
  CambiarEstado(IdEstadoUsuario: number, Id: string){
    this.gestionUsuarioService.EditarEstado(44, "das").subscribe(
      res => {
        this.gestionUsuarioService.listarUsuarios();
        this.toastr.success('Se cambio el estado');
      },
      err => {
        this.toastr.error('Error');
      }
    );
  }

}
