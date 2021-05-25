import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Pedido } from './pedido-model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private readonly URL = 'http://localhost:8090/pedidos/';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) {
  }

  public buscarTodos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.URL)
  }

  public salvar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.URL, JSON.stringify(pedido), this.httpOptions)
  }

}
