import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { LotacaoModel } from '../model/lotacao.model';
import { LinhasLotacaoRestService } from './linhas-lotacao-rest.service';

@Injectable()
export class LinhasLotacaoService {

  constructor(private restService: LinhasLotacaoRestService) { }

  public getLinhasLotacao(): Observable<LotacaoModel[]> {
    return this.restService.getLinhasLotacao().pipe(
      map(res => res.map(lotacao => new LotacaoModel(lotacao.id, lotacao.nome, lotacao.codigo))),
      tap(el => console.log(el),
          err => console.error('Error on fetching Linhas de Lotação'),
          () => console.log('Fetched Linhas de Lotação')),
      catchError(this.handleError<LotacaoModel[]>(`getLinhasLotacao`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);       // Log the error
      return of(result as T);     // Return empty result.
    };
  }
}
