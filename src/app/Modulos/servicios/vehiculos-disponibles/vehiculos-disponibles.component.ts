import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vehiculos-disponibles',
  templateUrl: './vehiculos-disponibles.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./vehiculos-disponibles.component.css']
})
export class VehiculosDisponiblesComponent implements OnInit {

  constructor(public modal:NgbModal) { }

  ngOnInit(): void {
  }

  openFunciones(contenido){
    this.modal.open(contenido,{centered:true, windowClass:'oscuro', scrollable:true});
  }

}
