import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Detalleservicio } from '../interfaces/detalleservicio';
import { Listarservicios } from '../interfaces/listarservicios';
import { Servicio } from '../interfaces/servicio';
import { Tipocarga } from '../interfaces/tipocarga';
import { Vehiculosdisponibles } from '../interfaces/vehiculosdisponibles';
import { Visualizarconductor } from '../interfaces/visualizarconductor';

@Injectable({
  providedIn: 'root'
})
export class GestionServicioService {
  readonly rootURL = 'https://localhost:44310/api';

  servicio:Servicio;
  tipoCarga: Tipocarga[];
  formularioRegistroServicio: FormGroup;
  listaServicios:Listarservicios[];
  detalleservicio:Detalleservicio;
  visualizarvehiculos:Vehiculosdisponibles;
  visualizarconductor:Visualizarconductor;
  constructor(private http: HttpClient) { }

  listarServicios(){
    this.http.get(this.rootURL + '/Servicios')
    .toPromise().then(res => this.listaServicios = res as Listarservicios[]);
  }

  detalleServicio(id: number){
    this.http.get(this.rootURL + '/Servicios/' + id)
    .toPromise()
    .then(res => this.detalleservicio = res as Detalleservicio);
  }

  guardarServicio(){
    this.servicio = this.formularioRegistroServicio.value;
    Number(this.servicio.IdEstadoServicio = 1);
    return this.http.post(this.rootURL + '/Servicios', this.servicio);
  }

  vehiculosDisponibles(id: number){
    this.http.get(this.rootURL + '/Servicios/Vehiculos/' + id)
    .toPromise()
    .then(res => this.visualizarvehiculos = res as Vehiculosdisponibles);
  }

  conductorDisponible(id: number){
    this.http.get(this.rootURL + '/Servicios/Conductor/' + id)
    .toPromise()
    .then(res => this.visualizarconductor = res as Visualizarconductor);
  }

  ListaTipoCarga(){
    this.http.get(this.rootURL + '/Servicios/ListarTiposDeCarga')
    .toPromise()
    .then(res => this.tipoCarga = res as Tipocarga[]);
  }

  Asignar(IdServicio: number, IdInfo:number){
    console.log(IdServicio,IdInfo);
    return this.http.put(this.rootURL + '/Servicios/' + IdInfo, IdServicio);
  }
}
