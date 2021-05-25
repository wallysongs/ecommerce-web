import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly URL = 'http://localhost:8090/clientes/';

  constructor(private httpClient: HttpClient) {
  }

  public buscarPeloNome(nome: string): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL.concat(nome))
  }

}
