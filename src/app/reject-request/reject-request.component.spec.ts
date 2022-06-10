import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RejectRequestComponent } from './reject-request.component';

describe('RejectRequestComponent', () => {
  let component: RejectRequestComponent;
  let fixture: ComponentFixture<RejectRequestComponent>;
  let routerSpy = { navigate: jasmine.createSpy('/dashboard') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejectRequestComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
