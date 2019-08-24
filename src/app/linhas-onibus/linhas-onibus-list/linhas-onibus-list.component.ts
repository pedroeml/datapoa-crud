import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { tap, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { isNullOrUndefined } from 'util';

import { OnibusModel } from '../model/onibus.model';
import { LinhasOnibusService } from '../service/linhas-onibus.service';

@Component({
  selector: 'app-linhas-onibus-list',
  templateUrl: './linhas-onibus-list.component.html',
  styleUrls: ['./linhas-onibus-list.component.css']
})
export class LinhasOnibusListComponent implements OnInit {
  private onibusList: OnibusModel[];
  public form: FormGroup;
  public isLoading: boolean;
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<OnibusModel>;
  public tableSizeOptions: number[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private linhasOnibusService: LinhasOnibusService,
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
    this.getLinhasOnibus().subscribe();
  }

  private reactToFilterValueChange(): Observable<OnibusModel[]> {
    return this.form.get('filterCtrl').valueChanges.pipe(
      tap(() => { this.isLoading = true; }),
      debounceTime(300),
      distinctUntilChanged(),
      map(search => this.applyFilter(search)),
      tap(() => { this.isLoading = false; }));
  }

  private getLinhasOnibus(): Observable<OnibusModel[]> {
    return of({}).pipe(
      tap(() => { this.isLoading = true; }),
      switchMap(() => this.linhasOnibusService.getLinhasOnibus()),
      tap(onibusList => { this.onibusList = onibusList; }),
      tap(() => { this.isLoading = false; }),
      tap(onibusList => {
        if (!isNullOrUndefined(onibusList)) {
          this.dataSource = new MatTableDataSource(this.onibusList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      }));
  }

  private applyFilter(filterValue: string): OnibusModel[] {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    return this.dataSource.filteredData;
  }
}
