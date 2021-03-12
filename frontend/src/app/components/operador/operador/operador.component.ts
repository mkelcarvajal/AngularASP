import {Component, OnInit} from '@angular/core';
import {OperadorService} from '../../../services/operador/operador.service';
import {Operador} from '../../../interfaces/operador';
import {validateRut, formatterRut} from 'chilean-formatter';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent implements OnInit {
  operador: Operador = {
    id: 0,
    nombre: '',
    rut: '',
    estado: false,
    licencia: ''
  };
  operadores: Operador[] = [];
  isDisabled: boolean;

  constructor(
    private operadorService: OperadorService,
    private toastrService: ToastrService
  ) {
    this.isDisabled = true;
  }

  async ngOnInit(): Promise<void> {
    await this.getAllOperadores();
  }

  async submitOperador(): Promise<Operador> {
    if (this.operador.nombre.length === 0) {
      this.toastrService.error('El nombre del Operador no puede estar vacio', 'Nombre vacio');
      return;
    }

    if (!validateRut(this.operador.rut)) {
      this.toastrService.error('El Campo RUT no puede estar vacio', 'RUT');
      return;
    }

    if (this.operador.licencia.length === 0) {
      this.toastrService.error('El campo Licencia no puede estar vacio', 'Licencia');
      return;
    }

    try {
      const operador = await this.operadorService.createOperador(this.operador);
      if (operador.nombre.length > 0) {
        this.operadores.push(operador);
        return operador;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getAllOperadores(): Promise<Operador[]> {
    this.operadores = await this.operadorService.getAllOperador();
    return this.operadores;
  }

  async deleteOperador(id: number, index: number): Promise<Operador> {
    try {
      const operador = await this.operadorService.deleteOperador(id);
      this.operadores.splice(index, 1);
      return operador;
    } catch (e) {
      console.log(e);
    }
  }

  validarRut(rut): boolean {
    if (validateRut(rut)) {
      this.operador.rut = formatterRut(rut);
      return validateRut(rut);
    } else {
      this.operador.rut = 'Rut inválido';
      this.toastrService.warning('El RUT ingresado no es valido', 'Rut inválido');
      return validateRut(rut);
    }
  }

  validarNombre(nombre): void {

    if (nombre.ctrlKey || nombre.altKey) {
      nombre.preventDefault();
    } else {
      const key = nombre.keyCode;
      if (!((key === 8) || (key === 32) || (key === 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
        nombre.preventDefault();
      }
    }
  }

}
