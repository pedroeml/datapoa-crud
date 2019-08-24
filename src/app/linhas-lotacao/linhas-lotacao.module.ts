import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LinhasLotacaoRoutingModule } from './linhas-lotacao-routing.module';
import { LinhasLotacaoListComponent } from './linhas-lotacao-list/linhas-lotacao-list.component';
import { LinhasLotacaoService } from './service/linhas-lotacao.service';
import { LinhasLotacaoRestService } from './service/linhas-lotacao-rest.service';

@NgModule({
  declarations: [LinhasLotacaoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    LinhasLotacaoRoutingModule
  ],
  providers: [
    LinhasLotacaoService,
    LinhasLotacaoRestService
  ]
})
export class LinhasLotacaoModule { }
