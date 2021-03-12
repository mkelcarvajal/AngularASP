import {Component, OnInit} from '@angular/core';
import {OperadorService} from '../../../services/operador.service';
import {Operador} from '../../../interfaces/operador';
import { validateRut, formatterRut } from 'chilean-formatter'

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

  constructor(
    private operadorService: OperadorService,
  ) {
  }

  async ngOnInit() {
    await this.getAllOperadores();
  }

  async submitOperador(): Promise<Operador> {
    if (this.operador.nombre.length === 0) {
      alert('El nombre no debe ser nulo');
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
      return validateRut(rut);
    }
  }

}
