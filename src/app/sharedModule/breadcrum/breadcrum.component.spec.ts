import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumComponent } from './breadcrum.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('BreadcrumComponent', () => {
  let component: BreadcrumComponent;
  let fixture: ComponentFixture<BreadcrumComponent>;
  let routerSpy = { navigate: jasmine.createSpy('/dashboard') }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BreadcrumComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: Router, useValue: routerSpy }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call breadCrumbHome method', () => {
    component.breadCrumbHome();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  })
});
