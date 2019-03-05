import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { debounceTime, distinctUntilChanged, switchMap, tap,  } from 'rxjs/operators';

import { ItinerarioUnidadeService } from '../itinerario-unidade.service';
import { ItinerarioUnidade } from '../itinerario-unidade';
import { Coordenadas } from '../coordenadas';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-itinerario-unidade-details',
  templateUrl: './itinerario-unidade-details.component.html',
  styleUrls: ['./itinerario-unidade-details.component.css']
})
export class ItinerarioUnidadeDetailsComponent implements OnInit {
  private form: FormGroup;
  private isLoading: boolean;
  private wasFound: boolean;
  private itinerario: ItinerarioUnidade;
  private displayedColumns: string[];
  private dataSource: MatTableDataSource<Coordenadas>;

  constructor(
    private itinerarioUnidadeService: ItinerarioUnidadeService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = false;
    this.wasFound = true;
    this.itinerario = undefined;
    this.dataSource = undefined;
    this.displayedColumns = ['lat', 'lng'];
    this.form = this.formBuilder.group({
      utIdCtrl: ['', [Validators.pattern('^[0-9]*$'), Validators.minLength(1)]]
    });
    this.form.get('utIdCtrl').valueChanges.pipe(
      tap(_ => (this.isLoading = true)),
      debounceTime(600),
      distinctUntilChanged(),
      switchMap(search => this.getItinerario(search)),
      tap(_ => (this.isLoading = false))).subscribe(itinerario => {
        this.itinerario = itinerario;
        this.dataSource = itinerario ? new MatTableDataSource(this.itinerario.coordenadas) : undefined;
        this.wasFound = itinerario ? true : false;
      });
    this.route.params.subscribe((params: ParamMap) => {
      if (params['id']) {
        this.form.get('utIdCtrl').setValue(params['id']);
      }
    });
  }

  private getItinerario(unidadeId: string): Observable<ItinerarioUnidade> {
    return this.itinerarioUnidadeService.getItinerario(unidadeId);
  }

}
