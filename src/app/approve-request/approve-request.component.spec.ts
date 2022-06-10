import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogMock, MatScanBarMock } from '../test/MatSnackBarMock';

import { ApproveRequestComponent } from './approve-request.component';

describe('ApproveRequestComponent', () => {
  let component: ApproveRequestComponent;
  let fixture: ComponentFixture<ApproveRequestComponent>;
  let routerSpy = { navigate: jasmine.createSpy('/dashboard') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveRequestComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: Router, useValue: routerSpy },
      { provide: MatSnackBar, useClass: MatScanBarMock },
      { provide: MatDialog, useClass: MatDialogMock }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call applyFilter', () => {
    const faketarget = { target: { value: 'abc' } }
    expect(component.applyFilter(faketarget as any)).toBeUndefined();
  });

  it('should call goBackToHome() Method', () => {
    component.goBackToHome();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

});
