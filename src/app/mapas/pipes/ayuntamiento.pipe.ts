import { Pipe, PipeTransform } from '@angular/core';
import { Autoridades } from '../interfaces/autoridades.interface';

@Pipe({
  name: 'ayuntamiento'
})
export class AyuntamientoPipe implements PipeTransform {

  transform(autoridad: Autoridades ): string {
    return `assets/images/ayuntamiento/${ autoridad.ayuntamiento.imagen_ayuntamiento}.${ autoridad.ayuntamiento.archivo_img}`;
  }

}
