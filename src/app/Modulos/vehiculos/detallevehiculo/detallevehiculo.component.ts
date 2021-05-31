import { ServicioVehiculosService } from './../Servicios/servicio-vehiculos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallevehiculo',
  templateUrl: './detallevehiculo.component.html',
  styleUrls: ['./detallevehiculo.component.css']
})
export class DetallevehiculoComponent implements OnInit {
  id: any;
  constructor(public servicioVehicuo: ServicioVehiculosService,  private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('id');
    this.servicioVehicuo.DetalleVehiculo(this.id);
  }

}
