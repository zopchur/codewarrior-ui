import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogMock, MatScanBarMock } from 'src/app/test/MatSnackBarMock';

import { AngularBotComponent } from './angular-bot.component';

describe('AngularBotComponent', () => {
  let component: AngularBotComponent;
  let fixture: ComponentFixture<AngularBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularBotComponent],
      providers: [{ provide: MatSnackBar, useClass: MatScanBarMock },
      { provide: MatDialog, useClass: MatDialogMock }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call openDialog() method and return configuration", fakeAsync(() => {
    expect(component.openDialog()).toBeUndefined();
  }));
});
