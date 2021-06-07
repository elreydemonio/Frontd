import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionServicioService } from '../servicios/gestion-servicio.service';

@Component({
  selector: 'app-detalle-servicios',
  templateUrl: './detalle-servicios.component.html',
  styleUrls: ['./detalle-servicios.component.css']
})
export class DetalleServiciosComponent implements OnInit {

  id: any;
  idConvert: number;
  Rol = localStorage.getItem('Rol');
  token = localStorage.getItem('token');
  constructor(public gestionServicioService:GestionServicioService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.idConvert = Number(this.id);
    this.gestionServicioService.detalleServicio(this.idConvert);
  }

}
