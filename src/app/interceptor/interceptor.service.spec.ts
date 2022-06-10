import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.service';
import { MatScanBarMock } from 'src/app/test/MatSnackBarMock';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('InterceptorService', () => {
  let service: InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MatSnackBar, useClass: MatScanBarMock }],
    });
    service = TestBed.inject(InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
