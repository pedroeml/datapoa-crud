import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Onibus } from './../onibus';
import { LinhasOnibusService } from '../linhas-onibus.service';

@Component({
  selector: 'app-linhas-onibus-list',
  templateUrl: './linhas-onibus-list.component.html',
  styleUrls: ['./linhas-onibus-list.component.css']
})
export class LinhasOnibusListComponent implements OnInit {
  private form: FormGroup;
  private isLoading: boolean;
  private onibusList: Onibus[];
  private displayedColumns: string[];
  private dataSource: MatTableDataSource<Onibus>;
  private tableSizeOptions = [5, 10, 20];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private linhasOnibusService: LinhasOnibusService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoading = false;
    this.onibusList = undefined;
    this.dataSource = undefined;
    this.displayedColumns = ['id', 'nome', 'codigo'];
    this.isLoading = true
    this.getLinhasOnibus().subscribe(onibusList => {
      this.onibusList = onibusList;
      if (onibusList) {
        this.dataSource = new MatTableDataSource(this.onibusList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      this.isLoading = false;
    });
  }

  private getLinhasOnibus(): Observable<Onibus[]> {
    return this.linhasOnibusService.getLinhasOnibus();
  }

}
