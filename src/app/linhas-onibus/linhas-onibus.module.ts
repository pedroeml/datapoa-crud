import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

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
