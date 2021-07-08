import { ToastrService } from 'ngx-toastr';
import { ServicioVehiculosService } from './../Servicios/servicio-vehiculos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
  image: string | ArrayBuffer;
  file: File;
  SegurodecargaFile: File;
  SoatFile: File;
  TecnoMecanicaFile: File;
  constructor(public servicioVehiculo: ServicioVehiculosService, private formbuilder: FormBuilder, private toast: ToastrService) { }

  ngOnInit(): void {
    this.servicioVehiculo.ListarTiposVehiculos();
    this.servicioVehiculo.ListarMarca();
    this.servicioVehiculo.listarColor();
    this.servicioVehiculo.FormularioRegistro = this.formbuilder.group({
      CodigoV: [''],
      IdMarca: ['', [Validators.required]],
      FotoV: ['', [Validators.required]],
      Modelo: ['', [Validators.required, Validators.maxLength(30)]],
      TecnoMecanica: ['', [Validators.required]],
      SeguroCarga: ['', [Validators.required]],
      IdColor: ['', [Validators.required]],
      Cilindraje: ['', [Validators.required, Validators.pattern(this.exRegularNumeros)]],
      IdTipoVehiculo: ['', [Validators.required]],
      Placa: ['', [Validators.required]],
      Soat: ['', [Validators.required]]
    });
  }
  saveImage(event: HtmlInputEvent): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);
    }
  }
  saveImage2(event: HtmlInputEvent): void {
    if (event.target.files.length > 0) {
      this.SegurodecargaFile = event.target.files[0];
      console.log(this.SegurodecargaFile);
    }
  }
  saveImage3(event: HtmlInputEvent): void {
    if (event.target.files.length > 0) {
      this.SoatFile = event.target.files[0];
      console.log(this.SoatFile);
    }
  }
  saveImage4(event: HtmlInputEvent): void {
    if (event.target.files.length > 0) {
      this.TecnoMecanicaFile = event.target.files[0];
      console.log(this.TecnoMecanicaFile);
    }
  }
  // tslint:disable-next-line: member-ordering
  exRegularLetras: any = '^[a-zA-Z ]*$';
  // tslint:disable-next-line: member-ordering
  exRegularCorreo: any = '\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*';
  // tslint:disable-next-line: member-ordering
  exRegularNumeros: any = '^[0-9]*$';
  // tslint:disable-next-line: typedef
  get IdMarca(){
    return this.servicioVehiculo.FormularioRegistro.controls.IdMarca;
  }
  // tslint:disable-next-line: typedef
  get CodigoV(){
    return this.servicioVehiculo.FormularioRegistro.controls.CodigoV;
  }
  // tslint:disable-next-line: typedef
  get FotoV(){
    return this.servicioVehiculo.FormularioRegistro.controls.FotoV;
  }
  // tslint:disable-next-line: typedef
  get Modelo(){
    return this.servicioVehiculo.FormularioRegistro.controls.Modelo;
  }
  // tslint:disable-next-line: typedef
  get TecnoMecanica(){
    return this.servicioVehiculo.FormularioRegistro.controls.TecnoMecanica;
  }
  // tslint:disable-next-line: typedef
  get SeguroCarga(){
    return this.servicioVehiculo.FormularioRegistro.controls.SeguroCarga;
  }
  // tslint:disable-next-line: typedef
  get IdColor(){
    return this.servicioVehiculo.FormularioRegistro.controls.IdColor;
  }
  // tslint:disable-next-line: typedef
  get Cilindraje(){
    return this.servicioVehiculo.FormularioRegistro.controls.Cilindraje;
  }
  // tslint:disable-next-line: typedef
  get IdTipoVehiculo(){
    return this.servicioVehiculo.FormularioRegistro.controls.IdTipoVehiculo;
  }
  // tslint:disable-next-line: typedef
  get Placa(){
    return this.servicioVehiculo.FormularioRegistro.controls.Placa;
  }
  // tslint:disable-next-line: typedef
  get Soat(){
    return this.servicioVehiculo.FormularioRegistro.controls.Soat;
  }
  // tslint:disable-next-line: typedef
  onSubmit(){
    this.servicioVehiculo.registrarImaganes(this.file).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.servicioVehiculo.registrarImaganes(this.SoatFile).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.servicioVehiculo.registrarImaganes(this.TecnoMecanicaFile).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.servicioVehiculo.registrarImaganes(this.SegurodecargaFile).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.servicioVehiculo.registrarVehiculo().subscribe(
      res => {
        this.toast.error('Error');
      },
      err => {   
        console.log(err); 
      }
    );
  }
}
