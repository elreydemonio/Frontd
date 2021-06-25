import { Component, OnInit } from '@angular/core';
import {GestionUsuarioService} from '../../servicios/gestion-usuario.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-listar-conductor',
  templateUrl: './listar-conductor.component.html',
  styleUrls: ['./listar-conductor.component.css']
})
export class ListarConductorComponent implements OnInit {

  constructor(public gestionUsuarioService:GestionUsuarioService, private toastr:ToastrService) { }
  listarConductor;
  ngOnInit(): void {
    this.gestionUsuarioService.listrConductor().subscribe(
      res => {
        this.listarConductor = res;
      },
      error => {
        console.log(error);
      }
    )
  }

}
