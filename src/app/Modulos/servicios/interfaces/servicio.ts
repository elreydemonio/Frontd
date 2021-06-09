export interface Servicio {
  IdServicio:number;
  CelularRecibe:number;
  PersonaRecibe:String;
  DireccionCarga:String;
  DireccionEntrega:String;
  FechaFin:Date;
  FechaInicio:Date;
  IdCliente:number;
  IdConductor:number;
  IdEstadoServicio:number;
  DescripcionCarga:String;
  IdTipoCarga:number;
  PrecioServicio:DoubleRange;
}
