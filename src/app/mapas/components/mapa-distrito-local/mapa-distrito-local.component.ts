import { Component, Input, OnInit } from '@angular/core';
import { Ayuntamientos } from '../../interfaces/autoridades.interface';

@Component({
  selector: 'app-mapa-distrito-local',
  templateUrl: './mapa-distrito-local.component.html',
  styleUrls: ['./mapa-distrito-local.component.scss']
})
export class MapaDistritoLocalComponent implements OnInit {

  @Input() ayuntamientos!:Ayuntamientos;

  distritoSeccion: string='';

  distrito: string= this.distritoSeccion;

  distritoEncendido='encendido';

  constructor() { }
  
  ngOnInit(): void {
  }
  verDistrito(Distrito:string){
    this.distrito=Distrito;
    this.distritoEncendido='apagado';
  }
  verDistritoSeccion(){
    this.distrito=this.distritoSeccion;
    this.distritoEncendido='encendido';
  }
}
