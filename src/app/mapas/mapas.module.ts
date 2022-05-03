import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MapaVistaComponent } from './components/mapa-vista/mapa-vista.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MapaDistritoLocalComponent } from './components/mapa-distrito-local/mapa-distrito-local.component';

import { AutoridadesComponent } from './components/autoridades/autoridades.component';
import { MaterialModule } from '../material/material.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { AutoridadTarjetaComponent } from './components/autoridad-tarjeta/autoridad-tarjeta.component';
import { AutoridadDatosComponent } from './components/autoridad-datos/autoridad-datos.component';
import { LogoPipe } from './pipes/logo.pipe';
import { AyuntamientoPipe } from './pipes/ayuntamiento.pipe';
import { BuscarComponent } from './components/buscar/buscar.component';
import { MapaDistritoFederalComponent } from './components/mapa-distrito-federal/mapa-distrito-federal.component';
import { MapaAyuntamientoComponent } from './components/mapa-ayuntamiento/mapa-ayuntamiento.component';
import { MapaEstadoComponent } from './components/mapa-estado/mapa-estado.component';



@NgModule({
  declarations: [
    MapaVistaComponent,
    MapaDistritoLocalComponent,
    AutoridadesComponent,
    ImagenPipe,
    LogoPipe,
    AyuntamientoPipe,
    AutoridadTarjetaComponent,
    AutoridadDatosComponent,
    BuscarComponent,
    MapaDistritoFederalComponent,
    MapaAyuntamientoComponent,
    MapaEstadoComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports:[
    MapaVistaComponent,
    AutoridadesComponent
  ]
})
export class MapasModule { }
