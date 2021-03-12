import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tren} from '../../interfaces/tren';

@Injectable({
  providedIn: 'root'
})
export class TrenService {

  appUrl = 'https://localhost:44310/';
  appApi = 'api/tren/';

  constructor(
    private http: HttpClient
  ) { }

  async getTren(operador: Tren): Promise<Tren> {
    return this.http.get<Tren>(this.appUrl + this.appApi + `${operador}`).toPromise();
  }

  async getAllTren(): Promise<Tren[]> {
    return this.http.get<Tren[]>(this.appUrl + this.appApi).toPromise();
  }

  async createTren(body: Tren): Promise<Tren> {
    return this.http.post<Tren>(this.appUrl + this.appApi, body).toPromise();
  }

  async deleteTren(id: number): Promise<Tren> {
    return this.http.delete<Tren>(this.appUrl + this.appApi + `${id}`).toPromise();
  }
}
