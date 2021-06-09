import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { MapCustomService } from '../servicios/map-custom.service';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit {

  @ViewChild('asGeoCoder') asGeoCoder: ElementRef;
  modeInput = 'start';
  wayPoints: WayPoints = {start: null, end: null};

  constructor(private mapCustomService: MapCustomService, private renderer2: Renderer2, private socket:Socket) { }

  ngOnInit(): void {
    this.mapCustomService.buildMap()
    .then(({geocoder, map}) => {
      this.renderer2.appendChild(this.asGeoCoder.nativeElement,
          geocoder.onAdd(map)
        );
      console.log('****** TODO BIEN *****');
    })
    .catch((err) => {
      console.log('****** ERROR ****', err);
    });

    this.mapCustomService.cbAddress.subscribe((getPoint) => {
      if (this.modeInput === 'start') {
        this.wayPoints.start = getPoint;
      }
      if (this.modeInput === 'end') {
        this.wayPoints.end = getPoint;
      }
    });

    this.socket.fromEvent('position').subscribe(({coords}) => {
      console.log('****** Desde Server ****', coords);
      this.mapCustomService.addMarkerCustom(coords);
    });
  }

  drawRoute(): void {
    console.log('**** PUNTOS DE ORIGEN Y DESTINO', this.wayPoints);
    const coords = [
      this.wayPoints.start.center,
      this.wayPoints.end.center
    ];
    this.mapCustomService.loadCoords(coords);
  }

  changeMode(mode: string): void {
    this.modeInput = mode;
  }

  testMarker(): void {
    window.location.href = "servicios/";
  }
}

export class WayPoints {
  start: any;
  end: any;
}
