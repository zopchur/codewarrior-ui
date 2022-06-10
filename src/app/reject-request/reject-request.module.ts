import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RejectRequestRoutingModule } from './reject-request-routing.module';
import { RejectRequestComponent } from './reject-request.component';
import { SharedModule } from '../sharedModule/shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    RejectRequestComponent
  ],
  imports: [
    CommonModule,
    RejectRequestRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class RejectRequestModule { }
