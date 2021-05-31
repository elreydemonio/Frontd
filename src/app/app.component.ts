import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Rol = localStorage.getItem('Rol');
  token = localStorage.getItem('token');
  isCollapsed = false;
}
