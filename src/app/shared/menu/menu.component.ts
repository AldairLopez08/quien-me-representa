import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme.service';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
 
})
export class MenuComponent implements OnInit {

  seccion: FormGroup= this.fb.group({
    numeroSeccion:[ ,[ Validators.required, Validators.min(1), Validators.max(3178) ]]
  });

  ayuntamientoSeccion: string='';

  items: MenuItem[]= [];

  visibleSidebar1:any= false;

  theme: string='saga-purple';

  display: boolean = false;

  constructor(private themeService:ThemeService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Inicio',
          icon: 'pi pi-home',
          routerLink: '/'
      },
      {
          label: 'Configuración',
          icon: 'pi pi-cog',
          command: (event)=>{
            this.visibleSidebar1 = true;
          } 
      }
  ];
  
  }

  changeTheme(theme: string){
    this.themeService.switchTheme(theme);
    if(theme==='saga-purple'){
      this.theme= theme;
    }else if(theme==='bootstrap4-light-purple')
      {
        this.theme= theme; 
      }else{
      this.theme='';
    }
  }

  showDialog(valor:boolean) {
    this.display = valor;
    document.getElementById('informacionSeccion')?.classList.remove('parpadea');
  }

  buscarSeccion(){
    this.ayuntamientoSeccion= this.seccion.controls?.['numeroSeccion']?.value;
    // console.log(this.ayuntamientoSeccion);
    
  }

  seccionValida(){
    return this.seccion.controls?.['numeroSeccion']?.errors && 
           this.seccion.controls?.['numeroSeccion']?.touched;
  }

}
