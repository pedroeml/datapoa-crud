import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LinhasOnibusModule } from './linhas-onibus.module';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Onibus } from './onibus';

@Injectable({
  providedIn: LinhasOnibusModule
})
export class LinhasOnibusService {
  private baseUrl = 'http://www.poatransporte.com.br/php/facades/process.php';

  constructor(private http: HttpClient) { }

  getLinhasOnibus(): Observable<Onibus[]> {
    return this.http.get<Onibus[]>(`${this.baseUrl}?a=nc&p=%&t=o`).pipe(
      map(res => res.map(onibus => new Onibus(onibus['id'], onibus['nome'], onibus['codigo']))),
      tap(el => console.log(el),
          err => console.error('Error on fetching Linhas de Ônibus'),
          () => console.log('Fetched Linhas de Ônibus')
      ),
      catchError(this.handleError<Onibus[]>(`getLinhasOnibus`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);       // Log the error
      return of(result as T);     // Return empty result.
    };
  }
}
