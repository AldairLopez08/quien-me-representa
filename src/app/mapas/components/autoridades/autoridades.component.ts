import { Component, OnInit } from '@angular/core';
import { Autoridades, Ayuntamientos } from '../../interfaces/autoridades.interface';
import { AutoridadesService } from '../../services/autoridades.service';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import db  from '../../../../assets/json-server/db.json';


@Component({
  selector: 'app-autoridades',
  templateUrl: './autoridades.component.html'
})
export class AutoridadesComponent implements OnInit {

  autoridades: Autoridades[]=[];

  ayuntamientos!: Ayuntamientos;
  
  items: MenuItem[]= [];

  display: boolean = false;

  dipLocal: boolean = false;

  dipFederal: boolean = false;

  

  constructor(private autoridadesService:AutoridadesService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    let idAyuntamiento=0;

    this.activatedRoute.params
      .subscribe(params => {
        idAyuntamiento= params['id'];
      });
      console.log(idAyuntamiento);
      
      db.ayuntamientos.forEach(ayuntamientos => {
        if (ayuntamientos.id == idAyuntamiento) {
          this.ayuntamientos = ayuntamientos;
        }
      });
    
      this.autoridades= db.autoridades;
     
  }
  showDialog(valor:boolean) {
    this.display = valor;
  }
  showDialogDipLocal(valor:boolean) {
    this.dipLocal = valor;
  }
  showDialogDipFederal(valor:boolean) {
    this.dipFederal = valor;
  }
}

    // this.activatedRoute.params
    //   .pipe(
    //     switchMap( ({ id })=> this.autoridadesService.getSeccionPorId(id))
    //   )
    //   .subscribe( ayuntamientos=> this.ayuntamientos=ayuntamientos);
    // this.autoridadesService.getAutoridades()
    //   .subscribe(autoridades => this.autoridades= autoridades);