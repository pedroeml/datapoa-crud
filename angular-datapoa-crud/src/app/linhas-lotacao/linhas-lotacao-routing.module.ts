import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinhasLotacaoListComponent } from './linhas-lotacao-list/linhas-lotacao-list.component';

const routes: Routes = [{
  path: '',
  component: LinhasLotacaoListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinhasLotacaoRoutingModule { }
