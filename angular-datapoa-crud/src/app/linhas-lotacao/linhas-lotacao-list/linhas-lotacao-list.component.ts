import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Lotacao } from './../lotacao';
import { LinhasLotacaoService } from '../linhas-lotacao.service';

@Component({
  selector: 'app-linhas-lotacao-list',
  templateUrl: './linhas-lotacao-list.component.html',
  styleUrls: ['./linhas-lotacao-list.component.css']
})
export class LinhasLotacaoListComponent implements OnInit {
  private form: FormGroup;
  private isLoading: boolean;
  private lotacaoList: Lotacao[];
  private displayedColumns: string[];
  private dataSource: MatTableDataSource<Lotacao>;
  private tableSizeOptions = [5, 10, 20];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private linhasLotacaoService: LinhasLotacaoService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoading = false;
    this.lotacaoList = undefined;
    this.dataSource = undefined;
    this.displayedColumns = ['id', 'nome', 'codigo'];
    this.form = this.formBuilder.group({
      filterCtrl: ['', []]
    });
    this.form.get('filterCtrl').valueChanges.pipe(
      tap(_ => (this.isLoading = true)),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(search => this.applyFilter(search)),
      tap(_ => (this.isLoading = false))).subscribe();
    this.isLoading = true;
    this.getLinhasLotacao().subscribe(lotacaoList => {
      this.lotacaoList = lotacaoList;
      if (lotacaoList) {
        this.dataSource = new MatTableDataSource(this.lotacaoList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      this.isLoading = false;
    });
  }

  private getLinhasLotacao(): Observable<Lotacao[]> {
    return this.linhasLotacaoService.getLinhasLotacao();
  }

  applyFilter(filterValue: string): Lotacao[] {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    return this.dataSource.filteredData;
  }

}
