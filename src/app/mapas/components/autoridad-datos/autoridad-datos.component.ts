import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Autoridades } from '../../interfaces/autoridades.interface';
import { AutoridadesService } from '../../services/autoridades.service';
import db  from '../../../../assets/json-server/db.json';

@Component({
  selector: 'app-autoridad-datos',
  templateUrl: './autoridad-datos.component.html',
  styleUrls: ['./autoridad-datos.component.scss']
})
export class AutoridadDatosComponent implements OnInit {

  autoridad!: Autoridades;

  
  constructor( private activatedRoute:ActivatedRoute,
               private autoridadesService:AutoridadesService) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    //   .pipe(
    //     switchMap( ({id})=> this.autoridadesService.getAutoridadPorId(id) )
    //   )
    //   .subscribe( autoridad => this.autoridad= autoridad  );
    let idAutoridad="";
    this.activatedRoute.params
      .subscribe(params => {
        idAutoridad= params['id'];
      });
      
      //  console.log('Id Autoridad: ', idAutoridad);
      db.autoridades.forEach(autoridad => {
        if (autoridad.id === idAutoridad) {
          this.autoridad = autoridad;
        }
      });
      // console.log('Autoridad: ', this.autoridad);
      
  } 

}
