import { GestionUsuarioService } from './../../servicios/gestion-usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-conductor-vehiculos',
  templateUrl: './listar-conductor-vehiculos.component.html',
  styleUrls: ['./listar-conductor-vehiculos.component.css']
})
export class ListarConductorVehiculosComponent implements OnInit {
  id: any;
  listarConductor;
  constructor(public servicioUsuarios: GestionUsuarioService, private rutaActiva: ActivatedRoute) { }

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

}
