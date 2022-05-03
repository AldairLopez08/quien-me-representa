import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa-estado',
  templateUrl: './mapa-estado.component.html',
  styleUrls: ['./mapa-estado.component.scss']
})
export class MapaEstadoComponent implements OnInit {

  estadoSeccion: string='GUANAJUATO';

  estado: string= this.estadoSeccion;

  estadoEncendido='encendido';

  constructor() { }

  ngOnInit(): void {
  }

  verEstado(Estado:string){
    this.estado=Estado;
    this.estadoEncendido='apagado';
  }
  verEstadoSeccion(){
    this.estado=this.estadoSeccion;
    this.estadoEncendido='encendido';
  }

}
