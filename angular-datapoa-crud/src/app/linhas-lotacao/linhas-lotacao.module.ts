import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatTableModule,
         MatIconModule, MatPaginatorModule, MatSortModule, MatInputModule, MatTooltipModule } from '@angular/material';
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
