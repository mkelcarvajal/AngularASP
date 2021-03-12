import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Operador} from '../../interfaces/operador';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  appUrl = 'https://localhost:44310/';
  appApi = 'api/operador/';

  constructor(
    private http: HttpClient,
  ) { }

  async getOperador(operadorId: number): Promise<Operador> {
                                //(https://localhost:44310/api/operador/1)
    return this.http.get<Operador>(this.appUrl + this.appApi + `${operadorId}`).toPromise();
  }

  async getAllOperador(): Promise<Operador[]> {
    return this.http.get<Operador[]>(this.appUrl + this.appApi).toPromise();
  }

  async createOperador(body: Operador): Promise<Operador> {
    return this.http.post<Operador>(this.appUrl + this.appApi, body).toPromise();
  }

  async deleteOperador(id: number): Promise<Operador> {
    return this.http.delete<Operador>(this.appUrl + this.appApi + `${id}`).toPromise();
  }

}



