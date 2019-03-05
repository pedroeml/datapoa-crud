import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatProgressSpinnerModule, MatCardModule, MatTableModule, MatIconModule, MatPaginatorModule } from '@angular/material';
import { ItinerarioUnidadeRoutingModule } from './itinerario-unidade-routing.module';
import { ItinerarioUnidadeDetailsComponent } from './itinerario-unidade-details/itinerario-unidade-details.component';
import { ItinerarioUnidadeService } from './itinerario-unidade.service';

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
    ItinerarioUnidadeRoutingModule
  ],
  providers: [
    ItinerarioUnidadeService
  ]
})
export class ItinerarioUnidadeModule { }
