import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatTooltipModule } from '@angular/material';
import { HomeRoutingModule } from './home-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
