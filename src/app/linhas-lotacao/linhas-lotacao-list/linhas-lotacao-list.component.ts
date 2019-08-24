import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { tap, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { isNullOrUndefined } from 'util';

import { LotacaoModel } from '../model/lotacao.model';
import { LinhasLotacaoService } from '../service/linhas-lotacao.service';

@Component({
  selector: 'app-linhas-lotacao-list',
  templateUrl: './linhas-lotacao-list.component.html',
  styleUrls: ['./linhas-lotacao-list.component.css']
})
export class LinhasLotacaoListComponent implements OnInit {
  private lotacaoList: LotacaoModel[];
  public form: FormGroup;
  public isLoading: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<LotacaoModel>;
  public tableSizeOptions: number[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private linhasLotacaoService: LinhasLotacaoService,
    private formBuilder: FormBuilder) {
      this.isLoading = false;
      this.tableSizeOptions = [5, 10, 20];
      this.displayedColumns = ['id', 'nome', 'codigo'];
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      filterCtrl: ['', []]
    });
    this.reactToFilterValueChange().subscribe();
    this.getLinhasLotacao().subscribe();
  }

  private reactToFilterValueChange(): Observable<LotacaoModel[]> {
    return this.form.get('filterCtrl').valueChanges.pipe(
      tap(() => { this.isLoading = true; }),
      debounceTime(300),
      distinctUntilChanged(),
      map(search => this.applyFilter(search)),
      tap(() => { this.isLoading = false; }));
  }

  private getLinhasLotacao(): Observable<LotacaoModel[]> {
    return of({}).pipe(
      tap(() => { this.isLoading = true; }),
      switchMap(() => this.linhasLotacaoService.getLinhasLotacao()),
      tap(lotacaoList => { this.lotacaoList = lotacaoList; }),
      tap(() => { this.isLoading = false; }),
      tap(lotacaoList => {
        if (!isNullOrUndefined(lotacaoList)) {
          this.dataSource = new MatTableDataSource(this.lotacaoList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      }));
  }

  private applyFilter(filterValue: string): LotacaoModel[] {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    return this.dataSource.filteredData;
  }
}
