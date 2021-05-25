import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Frete } from './frete.model';

@Injectable({
  providedIn: 'root'
})
export class FreteService {

  private readonly URL = 'http://localhost:8091/frete';

  constructor(private httpClient: HttpClient) {
  }

  public consultarFrete(quantidade: number): Observable<Frete> {
    return this.httpClient.get<Frete>(`${this.URL}/${quantidade}`)
  }

}
