import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatTableModule,
         MatIconModule, MatPaginatorModule, MatSortModule, MatInputModule, MatTooltipModule } from '@angular/material';

import { LinhasOnibusRoutingModule } from './linhas-onibus-routing.module';
import { LinhasOnibusListComponent } from './linhas-onibus-list/linhas-onibus-list.component';
import { LinhasOnibusService } from './service/linhas-onibus.service';
import { LinhasOnibusRestService } from './service/linhas-onibus-rest.service';

@NgModule({
  declarations: [LinhasOnibusListComponent],
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
    MatSortModule,
    MatTooltipModule,
    LinhasOnibusRoutingModule
  ],
  providers: [
    LinhasOnibusService,
    LinhasOnibusRestService
  ]
})
export class LinhasOnibusModule { }
