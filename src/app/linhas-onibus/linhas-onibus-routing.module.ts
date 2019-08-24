import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinhasOnibusListComponent } from './linhas-onibus-list/linhas-onibus-list.component';

const routes: Routes = [{
  path: '',
  component: LinhasOnibusListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinhasOnibusRoutingModule { }
