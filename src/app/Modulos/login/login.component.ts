import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './Servicios/usuario.service';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  parseJWT: any;
  Rol: any;
  constructor(public usuarioService: UsuarioService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('vehiculos');
    }
  }
  // tslint:disable-next-line: typedef
  onSubmit(){
    this.usuarioService.login().subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.parseJWT = jwtDecode(localStorage.getItem('token'));
        this.Rol = this.parseJWT.Rol;
        localStorage.setItem('Rol', this.Rol);
        this.router.navigateByUrl('welcome');
      },
      error => {
        if (error.status === 400){
          this.toastr.error('Nombre de usuario o contraseña incorrectos');
        }else{
          console.log(error);
        }
      }
    );
  }
}
