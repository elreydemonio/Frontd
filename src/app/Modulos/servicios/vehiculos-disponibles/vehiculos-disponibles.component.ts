import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GestionServicioService } from '../servicios/gestion-servicio.service';

@Component({
  selector: 'app-vehiculos-disponibles',
  templateUrl: './vehiculos-disponibles.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./vehiculos-disponibles.component.css']
})
export class VehiculosDisponiblesComponent implements OnInit {
  id: any;
  idConvert: number;

  constructor(public modal:NgbModal, public gestionServicioService:GestionServicioService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.idConvert = Number(this.id);
    this.gestionServicioService.vehiculosDisponibles(this.idConvert);
  }

  openFunciones(contenido, IdServicio:number, IdConductor:number){
    this.modal.open(contenido,{centered:true, windowClass:'oscuro', scrollable:true});
    this.gestionServicioService.conductorDisponible(IdConductor);
    console.log(IdServicio, IdConductor);
  }

  openAsignar(IdInfo:number){
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.idConvert = Number(this.id);
    console.log(IdInfo, this.idConvert);
    this.gestionServicioService.Asignar(this.idConvert, IdInfo).subscribe(
      res => {
        window.location.href = 'servicios';
      },
      err => {
        console.log(err);
      }
    );
  }

}
