import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';


import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
