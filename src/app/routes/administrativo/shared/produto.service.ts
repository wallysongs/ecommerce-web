import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly URL = 'http://localhost:8090/produtos/';

  constructor(private httpClient: HttpClient) {
  }

  public buscarPeloNome(nome: string): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL.concat(nome))
  }

}
