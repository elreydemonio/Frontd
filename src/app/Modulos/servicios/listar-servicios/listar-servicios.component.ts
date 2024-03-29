import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { GestionServicioService } from '../servicios/gestion-servicio.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-listar-servicios',
  templateUrl: './listar-servicios.component.html',
  styleUrls: ['./listar-servicios.component.css']
})
export class ListarServiciosComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;
  Rol = localStorage.getItem('Rol');
  token = localStorage.getItem('token');
  constructor(public gestionServicioService:GestionServicioService, private toast: ToastrService) { }

  public imprimirLista():void {
    let data = document.getElementById('htmlData');

    html2canvas(data).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const fileuri = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      pdf.addImage(fileuri, 'PNG', 0, position, fileWidth, fileHeight)

      pdf.save('meraki.pdf');
    });
  }


  ngOnInit(): void {
    this.gestionServicioService.listarServicios();
  }

  CancelarServicio(id: number){
    this.gestionServicioService.CancelarServicio(id).subscribe(
      res => {
        this.toast.info('Se a cancelado el servicio correctamente');
      },
      err => {
        this.toast.error('Error');
      },
    )
  }

}
