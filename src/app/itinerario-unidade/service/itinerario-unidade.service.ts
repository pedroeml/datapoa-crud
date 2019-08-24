import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ItinerarioUnidadeResponse } from '../integration/itinerario-unidade.response';
import { ItinerarioUnidadeModel } from '../model/itinerario-unidade.model';
import { CoordenadasModel } from '../model/coordenadas.model';
import { ItinerarioUnidadeRestService } from './itinerario-unidade-rest.service';

@Injectable()
export class ItinerarioUnidadeService {

  constructor(private restService: ItinerarioUnidadeRestService) { }

  public getItinerario(unidadeId: string): Observable<ItinerarioUnidadeModel> {
    return this.restService.getItinerario(unidadeId).pipe(
      map(res => this.buildItinerario(res)),
      tap(el => console.log(el),
          err => console.error(`Error on fetching Itinerario UT ${unidadeId}`),
          () => console.log(`Fetched Itinerario UT ${unidadeId}`)),
      catchError(this.handleError<ItinerarioUnidadeModel>(`getItinerario unidadeId=${unidadeId}`))
    );
  }

  private filterByIndexedEntries(anyObject: any): number[] {
    // tslint:disable-next-line: radix
    return Object.keys(anyObject).filter(key => !isNaN(parseInt(key))).map(key => Number(key));
  }

  private buildItinerario(itinerario: ItinerarioUnidadeResponse): ItinerarioUnidadeModel {
    const coords: CoordenadasModel[] = this.filterByIndexedEntries(itinerario)
      .map(key => new CoordenadasModel(itinerario[key]));

    return new ItinerarioUnidadeModel(itinerario, coords);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);       // Log the error
      return of(result as T);     // Return empty result.
    };
  }
}
