import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

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
