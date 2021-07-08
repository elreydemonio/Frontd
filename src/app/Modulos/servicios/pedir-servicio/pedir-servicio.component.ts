import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GestionServicioService } from '../servicios/gestion-servicio.service';

@Component({
  selector: 'app-pedir-servicio',
  templateUrl: './pedir-servicio.component.html',
  styleUrls: ['./pedir-servicio.component.css']
})
export class PedirServicioComponent implements OnInit {

  constructor(public gestionServicioService:GestionServicioService, private formBuilder:FormBuilder, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.gestionServicioService.ListaTipoCarga();
    this.gestionServicioService.formularioRegistroServicio = this.formBuilder.group({
      IdServicio:[0],
      IdEstadoServicio:[""],
      IdTipoCarga:["", [Validators.required]],
      PersonaRecibe:["", [Validators.required, Validators.pattern(this.exRegularLetras), Validators.minLength(3), Validators.maxLength(30)]],
      DireccionCarga:["", [Validators.required]],
      DireccionEntrega:["", [Validators.required]],
      FechaFin:["", [Validators.required,]],
      PrecioServicio:["", [Validators.required, Validators.pattern(this.exRegularNumeros) , Validators.minLength(3), Validators.maxLength(9)]],
      CelularRecibe:["", [Validators.required, Validators.pattern(this.exRegularNumeros), Validators.minLength(5)]]
      })
  }

  exRegularLetras: any = "^[a-zA-Z\u00f1\u00d1 ]*$";
  exRegularNumeros: any = "^[0-9]*$";

  get IdTipoDocumento(){
    return this.gestionServicioService.formularioRegistroServicio.controls["IdTipoCarga"];
  }

  get PersonaRecibe(){
    return this.gestionServicioService.formularioRegistroServicio.controls["PersonaRecibe"];
  }

  get CelularRecibe(){
    return this.gestionServicioService.formularioRegistroServicio.controls["CelularRecibe"];
  }

  get DireccionCarga(){
    return this.gestionServicioService.formularioRegistroServicio.controls["DireccionCarga"];
  }

  get DireccionEntrega(){
    return this.gestionServicioService.formularioRegistroServicio.controls["DireccionEntrega"];
  }

  get FechaFin(){
    return this.gestionServicioService.formularioRegistroServicio.controls["FechaFin"];
  }

  get PrecioServicio(){
    return this.gestionServicioService.formularioRegistroServicio.controls["PrecioServicio"];
  }

  onSubmit(){
    this.gestionServicioService.servicio = this.gestionServicioService.formularioRegistroServicio.value;

    if(this.gestionServicioService.servicio.IdServicio == 0 || this.gestionServicioService.servicio.IdServicio == null)
      this.guardarServicios();
  }

  guardarServicios(){
    this.gestionServicioService.guardarServicio().subscribe(
      res=>{
        this.gestionServicioService.formularioRegistroServicio.reset();
        this.toastr.success("Registro exitoso");
        window.location.href = "servicios/vehiculos/" + res;
      },
      err=>{
        this.toastr.error('Error')
      }
    );
  }

}
