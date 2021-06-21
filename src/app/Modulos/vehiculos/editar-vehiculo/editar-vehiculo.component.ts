import { ToastrService } from 'ngx-toastr';
import { ServicioVehiculosService } from './../Servicios/servicio-vehiculos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

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
      IdMarca: [''],
      FotoV: ['', [Validators.required]],
      Modelo: [''],
      TecnoMecanica: ['', [Validators.required]],
      SeguroCarga: ['', [Validators.required]],
      IdColor: ['', [Validators.required]],
      Cilindraje: ['', [Validators.required, Validators.pattern(this.exRegularNumeros)]],
      IdTipoVehiculo: [''],
      Placa: [''],
      Soat: ['', [Validators.required]]
    });
  }

  url: any= '';
  url2: any= '';
  url3: any= '';
  url4: any= '';
  saveImage(event: HtmlInputEvent): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log(this.file);

      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        this.file = event.target.files[0];
        console.log(this.file);
        reader.onload = (event: any) => {
          this.url = (<FileReader>event.target).result;
        }

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
  saveImage2(event: HtmlInputEvent): void {
    if (event.target.files.length > 0) {
      this.SegurodecargaFile = event.target.files[0];
      console.log(this.SegurodecargaFile);

      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        this.file = event.target.files[0];
        console.log(this.file);
        reader.onload = (event: any) => {
          this.url2 = (<FileReader>event.target).result;
        }

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
  saveImage3(event: HtmlInputEvent): void {
    if (event.target.files.length > 0) {
      this.SoatFile = event.target.files[0];
      console.log(this.SoatFile);

      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        this.file = event.target.files[0];
        console.log(this.file);
        reader.onload = (event: any) => {
          this.url3 = (<FileReader>event.target).result;
        }

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
  saveImage4(event: HtmlInputEvent): void {
    if (event.target.files.length > 0) {
      this.TecnoMecanicaFile = event.target.files[0];
      console.log(this.TecnoMecanicaFile);

      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        this.file = event.target.files[0];
        console.log(this.file);
        reader.onload = (event: any) => {
          this.url4 = (<FileReader>event.target).result;
        }

        reader.readAsDataURL(event.target.files[0]);
      }
    }
  }
  exRegularLetras: any = '^[a-zA-Z ]*$';
  exRegularCorreo: any = '\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*';
  exRegularNumeros: any = '^[0-9]*$';

  get IdMarca(){
    return this.servicioVehiculo.FormularioRegistro.controls.IdMarca;
  }
  get CodigoV(){
    return this.servicioVehiculo.FormularioRegistro.controls.CodigoV;
  }
  get FotoV(){
    return this.servicioVehiculo.FormularioRegistro.controls.FotoV;
  }
  get Modelo(){
    return this.servicioVehiculo.FormularioRegistro.controls.Modelo;
  }
  get TecnoMecanica(){
    return this.servicioVehiculo.FormularioRegistro.controls.TecnoMecanica;
  }
  get SeguroCarga(){
    return this.servicioVehiculo.FormularioRegistro.controls.SeguroCarga;
  }
  get IdColor(){
    return this.servicioVehiculo.FormularioRegistro.controls.IdColor;
  }
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
        this.toast.success('Guardado correctamente');
      },
      err => {
        console.log(err);
      }
    );
  }
}
