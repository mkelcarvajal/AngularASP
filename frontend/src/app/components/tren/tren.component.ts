import { Component, OnInit } from '@angular/core';
import {Tren} from '../../interfaces/tren';
import {ToastrService} from 'ngx-toastr';
import {TrenService} from '../../services/tren/tren.service';
import {Operador} from '../../interfaces/operador';
import {OperadorService} from '../../services/operador/operador.service';

@Component({
  selector: 'app-tren',
  templateUrl: './tren.component.html',
  styleUrls: ['./tren.component.css']
})
export class TrenComponent implements OnInit {

  tren: Tren = {
    id: 0,
    numeroTren: 0,
    observacion: '',
    operadorId: 0
  };
  trenes: Tren[] = [];
  isDisabled: boolean;

  operadores: Operador[];

  constructor(
    private trenService: TrenService,
    private operadorService: OperadorService,
    private toastrService: ToastrService
  ) {
    this.isDisabled = true;
  }

  async ngOnInit(): Promise<void> {
    this.operadores = await this.operadorService.getAllOperador();
    await this.getAllTrenes();
  }

  async submitTren(): Promise<Tren> {
    if (this.tren.numeroTren <= 0) {
      this.toastrService.error('El numero del tren no puede ser 0 o negativo', 'Numero de Tren');
      return;
    }

    if (this.tren.operadorId === 0) {
      this.toastrService.error('El campo Asignar operador no puede estar vacio', 'Asignar operador');
      return;
    }

    try {
      const tren = await this.trenService.createTren(this.tren);
      if (tren.numeroTren > 0) {
        this.trenes.push(tren);
        return tren;
      }
    } catch (e) {
      console.log(e);
    }
  }

  async getAllTrenes(): Promise<Tren[]> {
    this.trenes = await this.trenService.getAllTren();
    return this.trenes;
  }

  async deleteTren(id: number, index: number): Promise<Tren> {
    try {
      const tren = await this.trenService.deleteTren(id);
      this.trenes.splice(index, 1);
      return tren;
    } catch (e) {
      console.log(e);
    }
  }

  buscarOperador(operadorId: number): string {
    return this.operadores.find( o => o.id === operadorId).nombre;
  }
}
