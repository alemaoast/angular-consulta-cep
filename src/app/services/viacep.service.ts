import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private httpClient: HttpClient) { }

  getAddress(cep: string) {
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
