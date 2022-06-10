import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumComponent } from '../breadcrum/breadcrum.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [BreadcrumComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [BreadcrumComponent]
})
export class SharedModule { }
