import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaVistaComponent } from './mapas/components/mapa-vista/mapa-vista.component';
import { AutoridadesComponent } from './mapas/components/autoridades/autoridades.component';
import { AutoridadDatosComponent } from './mapas/components/autoridad-datos/autoridad-datos.component';

const routes: Routes = [
  {
    path: '',
    component: MapaVistaComponent,
    pathMatch: 'full'
  },
  {
    path: 'autoridades/secciones/:id',
    component: AutoridadesComponent
  },
  {
    path: 'autoridades/:id',
    component: AutoridadDatosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
