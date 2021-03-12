import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoPipe'
})
export class EstadoPipePipe implements PipeTransform {

  transform(value: boolean): string {
    if ( value ) { return 'Activo'; } else {return 'Inactivo'; }
  }

}

