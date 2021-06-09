import { Component, OnInit } from '@angular/core';
import { GestionServicioService } from '../servicios/gestion-servicio.service';

@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.css']
})
export class ListarServiciosComponent implements OnInit {
  Rol = localStorage.getItem('Rol');
  token = localStorage.getItem('token');
  constructor(public gestionServicioService:GestionServicioService) { }

  ngOnInit(): void {
    this.gestionServicioService.listarServicios();
  }

}
