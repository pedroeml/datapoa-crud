import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatTableModule, MatIconModule, MatPaginatorModule } from '@angular/material';
import { LinhasOnibusRoutingModule } from './linhas-onibus-routing.module';
import { LinhasOnibusListComponent } from './linhas-onibus-list/linhas-onibus-list.component';
import { LinhasOnibusService } from './linhas-onibus.service';

@NgModule({
  declarations: [LinhasOnibusListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    LinhasOnibusRoutingModule
  ],
  providers: [
    LinhasOnibusService
  ]
})
export class LinhasOnibusModule { }
