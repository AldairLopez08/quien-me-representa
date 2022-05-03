import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Autoridades } from '../../interfaces/autoridades.interface';
import { AutoridadesService } from '../../services/autoridades.service';
import { ActivatedRoute } from '@angular/router';
import db  from '../../../../assets/json-server/db.json';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
 
  termino:string = '';
  autoridades: Autoridades[]=[];
  autoridadSeleccionada: Autoridades | undefined;

  constructor(private autoridadesService: AutoridadesService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  buscando(){

      // this.termino= this.termino.trim();
     
      // console.log(this.termino);

      // db.autoridades.forEach(autoridad => {
      //   if (autoridad.nombre == this.termino) {
      //     this.autoridades= db.autoridades;
      //   }
      // });
      // console.log('Autoridad: ', this.autoridades);
    this.autoridadesService.getSugerencias(this.termino.trim() )
      .subscribe(autoridades=> this.autoridades=autoridades );
      console.log(this.autoridades);
      
  }
  
  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.autoridadSeleccionada= undefined;
      return;
    }

    const autoridad: Autoridades= event.option.value;
    this.termino= autoridad.nombre;
    
    this.autoridadesService.getAutoridadPorId(autoridad.id!)
      .subscribe(autoridad=> this.autoridadSeleccionada= autoridad);
    
  }

}
