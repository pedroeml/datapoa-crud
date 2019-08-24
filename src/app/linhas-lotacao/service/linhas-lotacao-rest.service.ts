import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LotacaoResponse } from '../integration/lotacao.response';

@Injectable()
export class LinhasLotacaoRestService {
  private baseUrl = 'http://www.poatransporte.com.br/php/facades/process.php';

  constructor(private http: HttpClient) { }

  public getLinhasLotacao(): Observable<LotacaoResponse[]> {
      return this.http.get<LotacaoResponse[]>(`${this.baseUrl}?a=nc&p=%&t=l`);
  }
}
