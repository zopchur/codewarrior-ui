import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(
    private keycloakService: KeycloakService, private router: Router
  ) { }

  username: String | undefined;

  ngOnInit() {
    this.username = this.keycloakService.getUsername();
  }


  logout() {
    this.keycloakService.logout();
  }

  signIn() {
    this.router.navigate(['/dashboard']);
  }
}
