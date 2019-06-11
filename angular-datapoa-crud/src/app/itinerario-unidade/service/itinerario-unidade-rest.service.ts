import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItinerarioUnidadeResponse } from '../model/itinerario-unidade.response';

@Injectable()
export class ItinerarioUnidadeRestService {
  private baseUrl = 'http://www.poatransporte.com.br/php/facades/process.php';

  constructor(private http: HttpClient) { }

  public getItinerario(unidadeId: string): Observable<ItinerarioUnidadeResponse> {
    return this.http.get<ItinerarioUnidadeResponse>(`${this.baseUrl}?a=il&p=${unidadeId}`);
  }
}
