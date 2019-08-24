import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
}, {
  path: 'linhas-onibus',
  loadChildren: () => import('./linhas-onibus/linhas-onibus.module').then(m => m.LinhasOnibusModule)
}, {
  path: 'linhas-lotacao',
  loadChildren: () => import('./linhas-lotacao/linhas-lotacao.module').then(m => m.LinhasLotacaoModule)
}, {
  path: 'itinerario-unidade',
  loadChildren: () => import('./itinerario-unidade/itinerario-unidade.module').then(m => m.ItinerarioUnidadeModule)
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
