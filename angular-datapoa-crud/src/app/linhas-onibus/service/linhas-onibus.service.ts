import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { OnibusModel } from '../model/onibus.model';
import { LinhasOnibusRestService } from './linhas-onibus-rest.service';

@Injectable()
export class LinhasOnibusService {

  constructor(private restService: LinhasOnibusRestService) { }

  public getLinhasOnibus(): Observable<OnibusModel[]> {
    return this.restService.getLinhasOnibus().pipe(
      map(res => res.map(onibus => new OnibusModel(onibus.id, onibus.nome, onibus.codigo))),
      tap(el => console.log(el),
          err => console.error('Error on fetching Linhas de Ônibus'),
          () => console.log('Fetched Linhas de Ônibus')),
      catchError(this.handleError<OnibusModel[]>(`getLinhasOnibus`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);       // Log the error
      return of(result as T);     // Return empty result.
    };
  }
}
