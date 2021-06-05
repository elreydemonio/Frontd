import { ServicioVehiculosService } from './../Servicios/servicio-vehiculos.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {

  constructor(public servicioVehiculo: ServicioVehiculosService,private toast: ToastrService) { }
  ngOnInit(): void {
    this.servicioVehiculo.ListarVehiculos();
    this.servicioVehiculo.ListarValidation();
  }
  // tslint:disable-next-line: typedef
  CambiarEstado(CodgioV: any){
    this.servicioVehiculo.CambarEstado(CodgioV).subscribe(
      res => {
          this.toast.info('Se ha cambiado correctamente el estado');
      },
      err => {

      }
    );
  }
}
