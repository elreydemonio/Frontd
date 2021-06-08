import { TipoVehiculos } from './../interfaz/tipo-vehiculos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Colores } from '../interfaz/colores';
import { ListaVehiculo } from '../interfaz/lista-vehiculo';
import { Marcas } from '../interfaz/marcas';
import { Vehiculo } from '../interfaz/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ServicioVehiculosService {
  readonly rootUrl = 'https://localhost:44384/api';
  listaVehiculos: ListaVehiculo[];
  vehiculo: Vehiculo;
  tipoVehiculo: TipoVehiculos[];
  Marca: Marcas[];
  Color: Colores[];
  detalleVehiculo: ListaVehiculo[];
  FormularioRegistro: FormGroup;
  listaConductorValidation;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  ListarVehiculos(){
    this.http.get(this.rootUrl + '/Vehiculos')
    .toPromise()
    .then(res => this.listaVehiculos = res as ListaVehiculo[]);
  }
  // tslint:disable-next-line: typedef
  registrarVehiculo(){
    this.vehiculo = this.FormularioRegistro.value;
    Number(this.vehiculo.IdTipoVehiculo);
    Number(this.vehiculo.IdColor);
    Number(this.vehiculo.IdMarca);
    console.log(this.vehiculo);
    return this.http.post(this.rootUrl + '/Vehiculos', this.vehiculo );
  }
  // tslint:disable-next-line: typedef
  registrarImaganes(file: File){
    const formData = new FormData();
    formData.append('File', file);
    return this.http.post(this.rootUrl + '/Vehiculos/Imagenes', formData);
  }
  // tslint:disable-next-line: typedef
  ListarTiposVehiculos(){
    this.http.get(this.rootUrl + '/Vehiculos/Tipovehiculos')
    .toPromise()
    .then(res => this.tipoVehiculo = res as TipoVehiculos[]);
  }
  // tslint:disable-next-line: typedef
  ListarMarca(){
    this.http.get(this.rootUrl + '/Vehiculos/Marcas' )
    .toPromise()
    .then(res => this.Marca = res as Marcas[]);
  }
  // tslint:disable-next-line: typedef
  listarColor(){
    this.http.get(this.rootUrl + '/Vehiculos/Colores')
    .toPromise()
    .then(res => this.Color = res as Colores[]);
  }
  // tslint:disable-next-line: typedef
  CambarEstado(CodigoV: string){
    return this.http.put(this.rootUrl + '/Vehiculos/CambiarEstado/' + CodigoV, CodigoV );
  }
  // tslint:disable-next-line: typedef
  DetalleVehiculo(CodigoV: string){
    this.http.get(this.rootUrl + '/Vehiculos/DetalleVehiculo/' + CodigoV)
    .toPromise()
    .then(res => this.detalleVehiculo = res as ListaVehiculo[]);
  }
  // tslint:disable-next-line: typedef
  ListarValidation(){
    this.http.get(this.rootUrl + '/Vehiculos/ListaConductoreValidation').
    toPromise()
    .then(res => this.listaConductorValidation = res);
  }
}
