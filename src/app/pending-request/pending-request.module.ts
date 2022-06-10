import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { PendingRequestRoutingModule } from './pending-request-routing.module';
import { PendingRequestComponent } from './pending-request.component';
import { SharedModule } from '../sharedModule/shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { TaskApproveDialogComponent } from './task-approve-dialog/task-approve-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PendingRequestComponent,
    TaskApproveDialogComponent
  ],
  imports: [
    CommonModule,
    PendingRequestRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule
  ],
  providers: [DatePipe]
})
export class PendingRequestModule { }
