import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { KeycloakService } from 'keycloak-angular';
import { ChatBotDialogComponent } from '../angular-bot/chat-bot-dialog/chat-bot-dialog.component';
import { Constants, Card } from '../constants/constants'
import { LoaderService } from '../loader/loader.service';
import { ChatService, Message } from '../services/chat.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {




  constructor(private router: Router, private keycloakService: KeycloakService, private loaderService: LoaderService) { }


  ngOnInit(): void {
    this.router.navigate(['/angular-bot']);


    const user = this.keycloakService.getUsername();
    if (user === 'nandramuser') {
      this.router.navigate(['/dashboard']);
    } else {
      this.changeTheme('red', '#7e4a35', '#625750', '#f7cac9');
      this.router.navigate(['/client']);
    }

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.isLoading.next(false);
    }, 0);
  }

  changeTheme(primary: string, secondary: string, secondryHover: string, textBackGroundColor: string) {
    document.documentElement.style.setProperty('--primaryColor', primary);
    document.documentElement.style.setProperty('--secondaryColor', secondary);
    document.documentElement.style.setProperty('--secondaryHover', secondryHover);
    document.documentElement.style.setProperty('--text-background-color', textBackGroundColor);
  }

}
