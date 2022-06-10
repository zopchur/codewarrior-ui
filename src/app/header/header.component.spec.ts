import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { KeycloakServiceStub } from '../test/KeycloakServiceStub';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let keycloakService: KeycloakService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, RouterModule.forRoot([]), MatMenuModule],
      declarations: [HeaderComponent],
      providers: [{ provide: KeycloakService, useClass: KeycloakServiceStub }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    keycloakService = fixture.debugElement.injector.get(KeycloakService);
    fixture.detectChanges();
  });

  it('Should Create HeaderComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call logout method', () => {
    component.logout();
    expect(keycloakService.logout()).toBeUndefined();
  })
});
