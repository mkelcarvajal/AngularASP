import { Component, OnInit } from '@angular/core';
import {Tren} from '../../interfaces/tren';
import {ToastrService} from 'ngx-toastr';
import {TrenService} from '../../services/tren/tren.service';

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

  constructor(
    private trenService: TrenService,
    private toastrService: ToastrService
  ) {
    this.isDisabled = true;
  }

  async ngOnInit(): Promise<void> {
    await this.getAllTrenes();
  }

  async submitTren(): Promise<Tren> {
    if (this.tren.numeroTren === 0) {
      this.toastrService.error('El numero del tren no puede ser 0', 'Numero de Tren');
      return;
    }

    if (this.tren.observacion.length === 0) {
      this.toastrService.error('El campo Licencia no puede estar vacio', 'Observacion');
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

  validarNumero(observacion): void {
    if (observacion.ctrlKey || observacion.altKey) {
      observacion.preventDefault();
    } else {
      const key = observacion.keyCode;
      if (!((key !== 8) || (key !== 32) || (key !== 46) || (key <= 35 && key >= 40) || (key <= 65 && key >= 90))) {
        observacion.preventDefault();
      }
    }
  }
}
