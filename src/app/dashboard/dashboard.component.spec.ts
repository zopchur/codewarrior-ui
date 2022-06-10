import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Constants } from '../constants/constants';
import { KeycloakServiceStub } from '../test/KeycloakServiceStub';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let routerSpy = { navigate: jasmine.createSpy('approveRequest') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: KeycloakService, useClass: KeycloakServiceStub },
        { provide: Router, useValue: routerSpy }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cardClick(add tenant)', () => {
    component.cardClick(Constants.APPROVE_REQUEST);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/approveRequest']);
  })
});
