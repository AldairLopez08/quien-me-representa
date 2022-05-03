import { Pipe, PipeTransform } from '@angular/core';
import { Autoridades } from '../interfaces/autoridades.interface';

@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {

  transform(autoridad: Autoridades ): string {
    return `assets/images/partidosPoliticos/${ autoridad.partido_politico.imagen_partido}.${ autoridad.partido_politico.archivo_img }`;
  }

}
