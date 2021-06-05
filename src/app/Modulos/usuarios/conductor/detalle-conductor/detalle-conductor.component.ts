import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionUsuarioService } from '../../servicios/gestion-usuario.service';

@Component({
  selector: 'app-detalle-conductor',
  templateUrl: './detalle-conductor.component.html',
  styleUrls: ['./detalle-conductor.component.css']
})
export class DetalleConductorComponent implements OnInit {

  id: any;
  detalleConductor;
  constructor(public servicioUsuarios: GestionUsuarioService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variable');
    this.servicioUsuarios.DetalleConductor(this.id).subscribe(
      res => {
        this.detalleConductor = res;
      },
      error => {

      }
    );
  }

}
