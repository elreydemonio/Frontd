import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-conductor',
  templateUrl: './registrar-conductor.component.html',
  styleUrls: ['./registrar-conductor.component.css']
})
export class RegistrarConductorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url: any= '';
  readUrl(event:any){
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = (<FileReader>event.target).result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
