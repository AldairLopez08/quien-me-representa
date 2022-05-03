import { Component, Input } from '@angular/core';
import { Autoridades, Ayuntamientos } from '../../interfaces/autoridades.interface';

@Component({
  selector: 'app-autoridad-tarjeta',
  templateUrl: './autoridad-tarjeta.component.html',
  styleUrls: ['./autoridad-tarjeta.component.scss']
})
export class AutoridadTarjetaComponent {
  @Input() autoridad!:Autoridades;
  @Input() ayuntamientos!:Ayuntamientos;
  
  display: boolean = false;


  showDialog(valor:boolean) {
    this.display = valor;
  }
}
