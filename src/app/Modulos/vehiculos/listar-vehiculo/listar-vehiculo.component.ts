import { ServicioVehiculosService } from './../Servicios/servicio-vehiculos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  constructor(public servicioVehiculo: ServicioVehiculosService) { }
  ngOnInit(): void {
    this.servicioVehiculo.ListarVehiculos();
  }
}
