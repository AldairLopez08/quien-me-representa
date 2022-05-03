import { Component, Input, OnInit } from '@angular/core';
import { Ayuntamientos } from '../../interfaces/autoridades.interface';

@Component({
  selector: 'app-mapa-distrito-federal',
  templateUrl: './mapa-distrito-federal.component.html',
  styleUrls: ['./mapa-distrito-federal.component.scss']
})
export class MapaDistritoFederalComponent implements OnInit {

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
