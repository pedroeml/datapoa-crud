import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatTableModule, MatIconModule, MatPaginatorModule, MatSortModule, MatInputModule } from '@angular/material';
import { LinhasOnibusRoutingModule } from './linhas-onibus-routing.module';
import { LinhasOnibusListComponent } from './linhas-onibus-list/linhas-onibus-list.component';
import { LinhasOnibusService } from './linhas-onibus.service';

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
    LinhasOnibusRoutingModule
  ],
  providers: [
    LinhasOnibusService
  ]
})
export class LinhasOnibusModule { }
