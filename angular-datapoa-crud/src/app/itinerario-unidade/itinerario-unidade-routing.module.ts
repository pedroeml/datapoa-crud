import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItinerarioUnidadeDetailsComponent } from './itinerario-unidade-details/itinerario-unidade-details.component';

const routes: Routes = [{
  path: '',
  component: ItinerarioUnidadeDetailsComponent
}, {
  path: ':id',
  component: ItinerarioUnidadeDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItinerarioUnidadeRoutingModule { }
