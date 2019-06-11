import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OnibusResponse } from '../model/onibus.interface';

@Injectable()
export class LinhasOnibusRestService {
  private baseUrl = 'http://www.poatransporte.com.br/php/facades/process.php';

  constructor(private http: HttpClient) { }

  public getLinhasOnibus(): Observable<OnibusResponse[]> {
    return this.http.get<OnibusResponse[]>(`${this.baseUrl}?a=nc&p=%&t=o`);
  }
}
