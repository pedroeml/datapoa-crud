import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: './home/home.module#HomeModule'
}, {
  path: 'linhas-onibus',
  loadChildren: './linhas-onibus/linhas-onibus.module#LinhasOnibusModule'
}, {
  path: 'linhas-lotacao',
  loadChildren: './linhas-lotacao/linhas-lotacao.module#LinhasLotacaoModule'
}, {
  path: 'itinerario-unidade',
  loadChildren: './itinerario-unidade/itinerario-unidade.module#ItinerarioUnidadeModule'
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
