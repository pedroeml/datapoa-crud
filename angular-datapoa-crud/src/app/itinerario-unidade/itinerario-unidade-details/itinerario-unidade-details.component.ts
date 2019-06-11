import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { debounceTime, distinctUntilChanged, switchMap, tap,  } from 'rxjs/operators';

import { ItinerarioUnidadeService } from '../service/itinerario-unidade.service';
import { ItinerarioUnidadeModel } from '../model/itinerario-unidade.model';
import { CoordenadasModel } from '../model/coordenadas.model';
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
  private itinerario: ItinerarioUnidadeModel;
  private displayedColumns: string[];
  private dataSource: MatTableDataSource<CoordenadasModel>;
  private tableSizeOptions = [5, 10, 20];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private itinerarioUnidadeService: ItinerarioUnidadeService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = false;
    this.wasFound = true;
    this.itinerario = undefined;
    this.dataSource = undefined;
    this.displayedColumns = ['map', 'lat', 'lng'];
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
        if (itinerario) {
          this.dataSource = new MatTableDataSource(this.itinerario.coordenadas);
          this.dataSource.paginator = this.paginator;
          this.wasFound = true;
          this.openSnackBar(`Itinerário da UT ${this.itinerario.id} encontrado!`, 'Fechar');
        } else {
          this.dataSource = undefined;
          this.wasFound = false;
          this.openSnackBar('Sem resultados!', 'Fechar');
        }
      });
    this.route.params.subscribe((params: ParamMap) => {
      if (params['id']) {
        this.form.get('utIdCtrl').setValue(params['id']);
      }
    });
  }

  private getItinerario(unidadeId: string): Observable<ItinerarioUnidadeModel> {
    return this.itinerarioUnidadeService.getItinerario(unidadeId);
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
