import { Component, Input, OnInit } from '@angular/core';
import { Ayuntamientos } from '../../interfaces/autoridades.interface';

@Component({
  selector: 'app-mapa-ayuntamiento',
  templateUrl: './mapa-ayuntamiento.component.html',
  styleUrls: ['./mapa-ayuntamiento.component.scss']
})
export class MapaAyuntamientoComponent implements OnInit {

  @Input() ayuntamientos!:Ayuntamientos;

  ayuntamientoSeccion: string='';

  ayuntamiento: string= this.ayuntamientoSeccion;

  ayuntamientoEncendido='encendido';

  constructor() { }

  ngOnInit(): void {
  }
  verAyuntamiento(Ayuntamiento:string){
    this.ayuntamiento=Ayuntamiento;
    this.ayuntamientoEncendido='apagado';
  }
  verAyuntamientoSeccion(){
    this.ayuntamiento=this.ayuntamientoSeccion;
    this.ayuntamientoEncendido='encendido';
  }

}
