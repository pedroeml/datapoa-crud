import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ItinerarioUnidadeModel } from './itinerario-unidade.model';
import { CoordenadasModel } from './coordenadas.model';
import { ItinerarioUnidadeRestService } from './itinerario-unidade-rest.service';

@Injectable()
export class ItinerarioUnidadeService {

  constructor(private restService: ItinerarioUnidadeRestService) { }

  public getItinerario(unidadeId: string): Observable<ItinerarioUnidadeModel> {
    return this.restService.getItinerario(unidadeId).pipe(
      map(res => {
        const coords: CoordenadasModel[] = [];

        Object.keys(res).filter(key => {
          // tslint:disable-next-line: radix
          return !isNaN(parseInt(key));
        }).forEach(key => {
          const coord = new CoordenadasModel(res[key]['lat'], res[key]['lng']);
          coords.push(coord);
        });

        return new ItinerarioUnidadeModel(res.idlinha, res.nome, res.codigo, coords);
      }),
      tap(el => console.log(el),
          err => console.error(`Error on fetching Itinerario UT ${unidadeId}`),
          () => console.log(`Fetched Itinerario UT ${unidadeId}`)
      ),
      catchError(this.handleError<ItinerarioUnidadeModel>(`getItinerario unidadeId=${unidadeId}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);       // Log the error
      return of(result as T);     // Return empty result.
    };
  }
}
