import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ItinerarioUnidadeModule } from './itinerario-unidade.module';
import { ItinerarioUnidade } from './itinerario-unidade';
import { Coordenadas } from './coordenadas';

@Injectable({
  providedIn: ItinerarioUnidadeModule
})
export class ItinerarioUnidadeService {
  private baseUrl = 'http://www.poatransporte.com.br/php/facades/process.php';

  constructor(private http: HttpClient) { }

  getItinerario(unidadeId: string): Observable<ItinerarioUnidade> {
    return this.http.get<ItinerarioUnidade>(`${this.baseUrl}?a=il&p=${unidadeId}`).pipe(
      map(res => {
        const coords = [];

        Object.keys(res).filter(key => {
          // tslint:disable-next-line: radix
          return !isNaN(parseInt(key));
        }).forEach(key => {
          const coord = new Coordenadas(res[key]['lat'], res[key]['lng']);
          coords.push(coord);
        });

        return new ItinerarioUnidade(res['idlinha'], res['nome'], res['codigo'], coords);
      }),
      tap(el => console.log(el),
          err => console.error(`Error on fetching Itinerario UT ${unidadeId}`),
          () => console.log(`Fetched Itinerario UT ${unidadeId}`)
      ),
      catchError(this.handleError<ItinerarioUnidade>(`getItinerario unidadeId=${unidadeId}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);       // Log the error
      return of(result as T);     // Return empty result.
    };
  }
}
