import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBotRoutingModule } from './angular-bot-routing.module';
import { AngularBotComponent } from './angular-bot.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/sharedModule/shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { getAuth } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { ChatBotDialogComponent } from '../chat-bot-dialog/chat-bot-dialog.component';
var app = initializeApp(environment.firebaseConfig);
var auth = getAuth(app);


@NgModule({
  declarations: [
    AngularBotComponent,
    ChatBotDialogComponent
  ],
  imports: [
    CommonModule,
    AngularBotRoutingModule,
    FormsModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,

  ]
})
export class AngularBotModule { }
