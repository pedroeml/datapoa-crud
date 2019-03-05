import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { LinhasLotacaoRoutingModule } from './linhas-lotacao-routing.module';
import { LinhasLotacaoListComponent } from './linhas-lotacao-list/linhas-lotacao-list.component';

@NgModule({
  declarations: [LinhasLotacaoListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    LinhasLotacaoRoutingModule
  ]
})
export class LinhasLotacaoModule { }
