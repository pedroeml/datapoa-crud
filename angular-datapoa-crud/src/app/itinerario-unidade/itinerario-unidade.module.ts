import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerarioUnidadeRoutingModule } from './itinerario-unidade-routing.module';
import { ItinerarioUnidadeDetailsComponent } from './itinerario-unidade-details/itinerario-unidade-details.component';

@NgModule({
  declarations: [ItinerarioUnidadeDetailsComponent],
  imports: [
    CommonModule,
    ItinerarioUnidadeRoutingModule
  ]
})
export class ItinerarioUnidadeModule { }
