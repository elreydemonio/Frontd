import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  constructor() { }
  exRegularLetras: any = '^[a-zA-Z ]*$';
  exRegularCorreo: any = '\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*';
  exRegularNumeros: any = '^[0-9]*$';
  public readonly exRegularPassword: any = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d*[$@#$!%*?&].{5,19}';
  public readonly exLetrasNumeros: any = '^[0-9a-zA-Z]+$';
<<<<<<< HEAD
  readonly rootURL = 'https://localhost:44310/api';
=======
  readonly rootURL = 'https://localhost:44345/api';
>>>>>>> 347da282a6575c025673d0d7f08ca4e63e6955aa
}
