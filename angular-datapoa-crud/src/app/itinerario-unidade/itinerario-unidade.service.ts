import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ItinerarioUnidadeModule } from './itinerario-unidade.module';
import { ItinerarioUnidade } from './itinerario-unidade';

@Injectable({
  providedIn: ItinerarioUnidadeModule
})
export class ItinerarioUnidadeService {
  baseUrl = 'http://www.poatransporte.com.br/php/facades/process.php';

  constructor(private http: HttpClient) { }

  getItinerario(unidadeId: string): Observable<ItinerarioUnidade> {
    return this.http.get<any[]>(`${this.baseUrl}?a=il&p=${unidadeId}`).pipe(
      tap(_ => console.log(`Fetched Itinerario UT ${unidadeId}`)),
      catchError(this.handleError<any>(`getItinerario unidadeId=${unidadeId}`))
    );

    // TODO: How to wrap the response into ItinerarioUnidade?
    // https://angular.io/tutorial/toh-pt6#final-code-review
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);       // Log the error
      return of(result as T);     // Return empty result.
    };
  }
}
