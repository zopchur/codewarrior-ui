import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { KeycloakService } from 'keycloak-angular';
import { of } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { KeycloakServiceStub } from 'src/app/test/KeycloakServiceStub';
import { MatDialogMock, MatScanBarMock } from 'src/app/test/MatSnackBarMock';
import { MatDialogDataMock, MatDialogRefMock } from 'src/app/test/MockFiles';

import { ChatBotDialogComponent } from './chat-bot-dialog.component';

describe('ChatBotDialogComponent', () => {
  let component: ChatBotDialogComponent;
  let fixture: ComponentFixture<ChatBotDialogComponent>;
  let chatService: ChatService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatBotDialogComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: MAT_DIALOG_DATA, useClass: MatDialogDataMock },
      { provide: MatSnackBar, useClass: MatScanBarMock },
      { provide: MatDialog, useClass: MatDialogMock },
      { provide: MatDialogRef, useClass: MatDialogRefMock },
      { provide: KeycloakService, useClass: KeycloakServiceStub }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBotDialogComponent);
    component = fixture.componentInstance;
    chatService = fixture.debugElement.injector.get(ChatService);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call sendMessage() method and return configuration", fakeAsync(() => {
    const response = 'name'
    spyOn(chatService, 'getBotAnswer').and.returnValue()
    component.ngOnInit();
    fixture.detectChanges();
    expect(response).not.toBeNull();
  }));

  it('should call closeChatModal', () => {
    expect(component.closeChatModal()).toBeUndefined();
  });
});
