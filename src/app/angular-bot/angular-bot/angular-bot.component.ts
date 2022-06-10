import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoaderService } from 'src/app/loader/loader.service';
import { ChatService, Message } from 'src/app/services/chat.service';
import { ChatBotDialogComponent } from '../chat-bot-dialog/chat-bot-dialog.component';

@Component({
  selector: 'app-angular-bot',
  templateUrl: './angular-bot.component.html',
  styleUrls: ['./angular-bot.component.scss']
})
export class AngularBotComponent implements OnInit, AfterViewInit, OnDestroy {

  messages: Message[] = [];
  value: string = '';
  constructor(public chatService: ChatService, private loaderService: LoaderService, public dialog: MatDialog) {
  }
  ngOnInit() {
    // document.body.className = "background-image";
    this.openDialog();
    this.chatService.conversation.subscribe((val) => {
      this.messages = this.messages.concat(val);
    });

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.isLoading.next(false);
    }, 0);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChatBotDialogComponent, {
      disableClose: true,
      width: '350px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      // document.body.className = "background-image";
      if (!(result && result.name === 'cancel')) {

      }
    });
  }

  ngOnDestroy(): void {
    document.body.className = "mat-typography";
  }

}
