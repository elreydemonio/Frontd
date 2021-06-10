import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionServicioService } from '../servicios/gestion-servicio.service';

@Component({
  selector: 'app-aceptar-servicio',
  templateUrl: './aceptar-servicio.component.html',
  styleUrls: ['./aceptar-servicio.component.css']
})
export class AceptarServicioComponent implements OnInit {
  ListarServiciosAceotar;
  constructor( public gestionServicioService: GestionServicioService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.gestionServicioService.ObternerServicios().subscribe(
      res => {
        this.ListarServiciosAceotar = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  // tslint:disable-next-line: typedef
  AceptarServicio(id: number){
    this.gestionServicioService.AceptarServicio(id).subscribe(
      res => {
        console.log('Logrado');
      },
      err => {
        console.log(err);
      }
    )
  }
}
