import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

import { CoordenadasModel } from '../model/coordenadas.model';
import { ItinerarioUnidadeModel } from '../model/itinerario-unidade.model';
import { ItinerarioUnidadeService } from '../service/itinerario-unidade.service';

@Component({
  selector: 'app-itinerario-unidade-details',
  templateUrl: './itinerario-unidade-details.component.html',
  styleUrls: ['./itinerario-unidade-details.component.css']
})
export class ItinerarioUnidadeDetailsComponent implements OnInit {
  public form: FormGroup;
  public isLoading: boolean;
  public wasFound: boolean;
  public itinerario: ItinerarioUnidadeModel;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<CoordenadasModel>;
  public tableSizeOptions: number[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private itinerarioUnidadeService: ItinerarioUnidadeService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute) {
      this.isLoading = false;
      this.wasFound = true;
      this.tableSizeOptions = [5, 10, 20];
      this.displayedColumns = ['map', 'lat', 'lng'];
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      utIdCtrl: ['', [Validators.pattern('^[0-9]*$'), Validators.minLength(1)]]
    });
    this.reactToFormIdFieldValueChange().subscribe();
    this.route.params.subscribe((params: ParamMap) => {
      if (params['id']) {
        this.form.get('utIdCtrl').setValue(params['id']);
      }
    });
  }

  private reactToFormIdFieldValueChange(): Observable<ItinerarioUnidadeModel> {
    return this.form.get('utIdCtrl').valueChanges.pipe(
      tap(() => { this.isLoading = true; }),
      debounceTime(600),
      distinctUntilChanged(),
      switchMap(search => this.getItinerario(search)),
      tap(itinerario => { this.itinerario = itinerario; }),
      tap(() => { this.isLoading = false; }),
      tap(itinerario => {
        if (!isNullOrUndefined(itinerario)) {
          this.dataSource = new MatTableDataSource(this.itinerario.coordenadas);
          this.dataSource.paginator = this.paginator;
          this.wasFound = true;
          this.openSnackBar(`Itinerário da UT ${this.itinerario.id} encontrado!`, 'Fechar');
        } else {
          this.dataSource = undefined;
          this.wasFound = false;
          this.openSnackBar('Sem resultados!', 'Fechar');
        }
      }));
  }

  private getItinerario(unidadeId: string): Observable<ItinerarioUnidadeModel> {
    return this.itinerarioUnidadeService.getItinerario(unidadeId);
  }

  private openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
