import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakServiceStub } from 'src/app/test/KeycloakServiceStub';
import { MatDialogMock, MatScanBarMock } from 'src/app/test/MatSnackBarMock';
import { MatDialogDataMock, MatDialogRefMock, MockDatePipe } from 'src/app/test/MockFiles';

import { TaskApproveDialogComponent } from './task-approve-dialog.component';


describe('TaskApproveDialogComponent', () => {
  let component: TaskApproveDialogComponent;
  let fixture: ComponentFixture<TaskApproveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskApproveDialogComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: MAT_DIALOG_DATA, useClass: MatDialogDataMock },
      { provide: MatSnackBar, useClass: MatScanBarMock },
      { provide: MatDialog, useClass: MatDialogMock },
      { provide: MatDialogRef, useClass: MatDialogRefMock },
      { provide: KeycloakService, useClass: KeycloakServiceStub },
      { provide: DatePipe, useClass: MockDatePipe }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskApproveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
