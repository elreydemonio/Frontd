import { GestionUsuarioService } from './../../servicios/gestion-usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-conductor-vehiculos',
  templateUrl: './listar-conductor-vehiculos.component.html',
  styleUrls: ['./listar-conductor-vehiculos.component.css']
})
export class ListarConductorVehiculosComponent implements OnInit {
  id: any;
  listarConductor;
  constructor(public servicioUsuarios: GestionUsuarioService, private rutaActiva: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.servicioUsuarios.ListarConductorVehiculo(this.id).subscribe(
      res => {
        this.listarConductor = res;
      },
      error => {

      }
    );
  }

  // tslint:disable-next-line: typedef
  EditarEstadoConductor(IdEstadoUsuario: string, Id: string){
    this.servicioUsuarios.EditarEstadoConductor(IdEstadoUsuario, Id).subscribe(
      res => {
        this.servicioUsuarios.listarUsuarios();
        this.toastr.success('Se cambio el estado');
      },
      err => {
        this.toastr.error('No se puede deasctivar conductor, tiene servicios activos');
      }
    );
  }

}
