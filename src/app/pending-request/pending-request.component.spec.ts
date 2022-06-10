import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialogMock, MatScanBarMock } from '../test/MatSnackBarMock';

import { PendingRequestComponent } from './pending-request.component';

describe('PendingRequestComponent', () => {
  let component: PendingRequestComponent;
  let fixture: ComponentFixture<PendingRequestComponent>;
  let routerSpy = { navigate: jasmine.createSpy('/dashboard') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingRequestComponent ],
      providers: [{ provide: Router, useValue: routerSpy },
        { provide: MatSnackBar, useClass: MatScanBarMock },
        { provide: MatDialog, useClass: MatDialogMock }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
