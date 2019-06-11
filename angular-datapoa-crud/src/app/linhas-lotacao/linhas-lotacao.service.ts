import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Lotacao } from './lotacao';

@Injectable()
export class LinhasLotacaoService {
  private baseUrl = 'http://www.poatransporte.com.br/php/facades/process.php';

  constructor(private http: HttpClient) { }

  getLinhasLotacao(): Observable<Lotacao[]> {
    return this.http.get<Lotacao[]>(`${this.baseUrl}?a=nc&p=%&t=l`).pipe(
      map(res => res.map(lotacao => new Lotacao(lotacao['id'], lotacao['nome'], lotacao['codigo']))),
      tap(el => console.log(el),
          err => console.error('Error on fetching Linhas de Lotação'),
          () => console.log('Fetched Linhas de Lotação')
      ),
      catchError(this.handleError<Lotacao[]>(`getLinhasLotacao`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);       // Log the error
      return of(result as T);     // Return empty result.
    };
  }
}
