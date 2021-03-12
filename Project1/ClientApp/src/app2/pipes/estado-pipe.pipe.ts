import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoPipe'
})
export class EstadoPipePipe implements PipeTransform {

  transform(value: any): any {
    if ( value ) { return 'Activo'; } else {return 'Inactivo'; }
  }

}

