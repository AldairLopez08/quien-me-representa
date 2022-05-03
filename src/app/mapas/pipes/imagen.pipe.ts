import { Pipe, PipeTransform } from '@angular/core';
import { Autoridades } from '../interfaces/autoridades.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(autoridad: Autoridades ): string {
    return `assets/images/autoridades/${ autoridad.img.foto_img}.${ autoridad.img.archivo_img}`;
  }

}
