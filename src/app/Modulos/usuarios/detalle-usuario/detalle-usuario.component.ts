import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionUsuarioService } from '../servicios/gestion-usuario.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  id: any;
  constructor(public gestionUsuarioService:GestionUsuarioService,
    private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.rutaActiva.snapshot.paramMap.get('variale');
    this.gestionUsuarioService.detalleUsuario(this.id);
  }

}
