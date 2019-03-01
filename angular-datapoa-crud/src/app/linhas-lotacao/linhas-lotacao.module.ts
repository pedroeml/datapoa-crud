import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinhasLotacaoRoutingModule } from './linhas-lotacao-routing.module';
import { LinhasLotacaoListComponent } from './linhas-lotacao-list/linhas-lotacao-list.component';

@NgModule({
  declarations: [LinhasLotacaoListComponent],
  imports: [
    CommonModule,
    LinhasLotacaoRoutingModule
  ]
})
export class LinhasLotacaoModule { }
