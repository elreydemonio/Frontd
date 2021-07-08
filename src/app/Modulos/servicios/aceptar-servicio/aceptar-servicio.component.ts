import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionServicioService } from '../servicios/gestion-servicio.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-aceptar-servicio',
  templateUrl: './aceptar-servicio.component.html',
  styleUrls: ['./aceptar-servicio.component.css']
})
export class AceptarServicioComponent implements OnInit {
  ListarServiciosAceotar;
  constructor( public gestionServicioService: GestionServicioService, private rutaActiva: ActivatedRoute, private toast: ToastrService) { }

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
    this.gestionServicioService.AceptarServicio(44).subscribe(
      res => {
        this.toast.success("Has aceptado el servicio")
      },
      err => {
        this.toast.error("Error")
      }
    )
  }
}
