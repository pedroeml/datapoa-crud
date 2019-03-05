import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material';
import { LinhasOnibusRoutingModule } from './linhas-onibus-routing.module';
import { LinhasOnibusListComponent } from './linhas-onibus-list/linhas-onibus-list.component';

@NgModule({
  declarations: [LinhasOnibusListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    LinhasOnibusRoutingModule
  ]
})
export class LinhasOnibusModule { }
