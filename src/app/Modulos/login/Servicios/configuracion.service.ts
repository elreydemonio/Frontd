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
  readonly rootURL = 'https://localhost:44366/api';

}
