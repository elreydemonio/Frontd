import { ServicioVehiculosService } from './../Servicios/servicio-vehiculos.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-listar-vehiculo',
  templateUrl: './listar-vehiculo.component.html',
  styleUrls: ['./listar-vehiculo.component.css']
})
export class ListarVehiculoComponent implements OnInit {
  strLength: any = [];
  Rol = localStorage.getItem('Rol');
  token = localStorage.getItem('token');
  dtOptions: any = {};
  pageSizeOptions: any;
  constructor(public servicioVehiculo: ServicioVehiculosService, private toast: ToastrService) { }
  ngOnInit(): void {
    this.servicioVehiculo.ListarVehiculos();
    this.pageSizeOptions = [3, 6];
  }
  // tslint:disable-next-line: typedef
  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }
    // tslint:disable-next-line: member-ordering
    page_size: number = 5;
    page_number: number = 1;
  // tslint:disable-next-line: typedef
  CambiarEstado(CodgioV: any){
    this.servicioVehiculo.CambarEstado(CodgioV).subscribe(
      res => {
          this.toast.error('Servicios activos');
      },
      err => {
      }
    );
  }
}
