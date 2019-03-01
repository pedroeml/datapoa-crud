import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerarioUnidadeRoutingModule } from './itinerario-unidade-routing.module';
import { ItinerarioUnidadeDetailsComponent } from './itinerario-unidade-details/itinerario-unidade-details.component';
import { ItinerarioUnidadeService } from './itinerario-unidade.service';

@NgModule({
  declarations: [ItinerarioUnidadeDetailsComponent],
  imports: [
    CommonModule,
    ItinerarioUnidadeRoutingModule
  ],
  providers: [
    ItinerarioUnidadeService
  ]
})
export class ItinerarioUnidadeModule { }
