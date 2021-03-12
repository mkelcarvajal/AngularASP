import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limpiarNull'
})
export class LimpiarNullPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length === 0) {
      return 'No hay observaciones para este tren';
    }
    return value;
  }

}
