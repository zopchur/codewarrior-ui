import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { LoaderService } from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hackathon-webui';

  constructor(public loaderService: LoaderService, private router: Router, private keycloakService: KeycloakService) {
  }
  ngOnInit(): void {
    this.loaderService.isLoading.next(true);
    this.router.navigate(['/home']);
  }
}
