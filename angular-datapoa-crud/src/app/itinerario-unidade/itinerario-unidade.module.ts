import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatCardModule,
         MatTableModule, MatIconModule, MatPaginatorModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';

import { ItinerarioUnidadeRoutingModule } from './itinerario-unidade-routing.module';
import { ItinerarioUnidadeDetailsComponent } from './itinerario-unidade-details/itinerario-unidade-details.component';
import { ItinerarioUnidadeService } from './service/itinerario-unidade.service';
import { ItinerarioUnidadeRestService } from './service/itinerario-unidade-rest.service';

@NgModule({
  declarations: [ItinerarioUnidadeDetailsComponent],
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
    MatSnackBarModule,
    MatTooltipModule,
    ItinerarioUnidadeRoutingModule
  ],
  providers: [
    ItinerarioUnidadeService,
    ItinerarioUnidadeRestService
  ]
})
export class ItinerarioUnidadeModule { }
