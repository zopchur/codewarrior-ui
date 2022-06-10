import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproveRequestRoutingModule } from './approve-request-routing.module';
import { ApproveRequestComponent } from './approve-request.component';
import { SharedModule } from '../sharedModule/shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ApproveRequestComponent
  ],
  imports: [
    CommonModule,
    ApproveRequestRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class ApproveRequestModule { }
