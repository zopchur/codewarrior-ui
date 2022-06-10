import { AfterViewChecked, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { KeycloakService } from 'keycloak-angular';
import { ChatService, Message } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-bot-dialog',
  templateUrl: './chat-bot-dialog.component.html',
  styleUrls: ['./chat-bot-dialog.component.scss'],

})
export class ChatBotDialogComponent implements OnInit, AfterViewChecked {

  messages: Message[] = [];
  value: string = '';
  constructor(public chatService: ChatService, public dialogRef: MatDialogRef<ChatBotDialogComponent>,
    private keycloakService: KeycloakService) { }
  ngOnInit() {
    this.chatService.orginalMessages = [];
    let msg = new Message('bot', this.chatService.messageMap['welcomeMsg']);
    this.messages.push(msg);
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);

    });

    this.chatService.closeConversation.subscribe((isClose) => {
      if (isClose) {
        this.closeChatModal();
      }
    })
  }

  ngAfterViewChecked(): void {
    const objDiv = document.getElementById("chatbot-div");
    if (objDiv) {
      objDiv.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
    }
  }
  sendMessage() {
    if (this.value && this.value !== '') {
      this.chatService.getBotAnswer(this.value);
      this.value = '';
    }
  }

  closeChatModal() {
    this.dialogRef.close();
  }

}
