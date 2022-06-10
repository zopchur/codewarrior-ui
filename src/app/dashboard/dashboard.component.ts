import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Card, Constants } from '../constants/constants';
import { LoaderService } from '../loader/loader.service';
import { Message } from '../services/chat.service';
import { TenantService } from '../services/tenant.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  cards: any[] = [];
  card: Card | undefined;
  constants = Constants;
  messages: Message[] = [];
  value: string = '';

  constructor(private router: Router, private keycloakService: KeycloakService, private loaderService: LoaderService,
    private tenantService: TenantService) { }

  ngOnInit(): void {
    this.getRequestList();
    setTimeout(() => {
      this.loaderService.isLoading.next(true);
    }, 0);

    let roles = this.keycloakService.getUserRoles();
    this.card = { "name": Constants.PENDING_REQUEST, "imageUrl": "../../assets/defaultIcon/pending_actions_black_24dp.svg" };
    this.cards.push(this.card);
    this.card = { "name": Constants.APPROVE_REQUEST, "imageUrl": "../../assets/defaultIcon/verified_user_black_24dp.svg" };
    this.cards.push(this.card);
    this.card = { "name": Constants.REJECT_REQUEST, "imageUrl": "../../assets/defaultIcon/thumb_down_alt_black_24dp.svg" };
    this.cards.push(this.card);
    // if (roles.includes('cfg:review_draft')) {
    //   this.card = { "name": Constants.ADMIN_ROLE_TASK, "imageUrl": "../../assets/defaultIcon/delete_black_24dp.svg" };
    //   this.cards.push(this.card);
    // }
  }

  getRequestList() {
    this.tenantService.getTenant().subscribe((itemLsit: any) => {
      console.log('item list', itemLsit);

    });

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loaderService.isLoading.next(false);
    }, 0);
  }
  cardClick(cardIndex: string) {
    this.loaderService.isLoading.next(true);
    switch (cardIndex) {
      case Constants.PENDING_REQUEST:
        this.router.navigate(['/pendingRequest']);
        break;
      case Constants.APPROVE_REQUEST:
        this.router.navigate(['/approveRequest']);
        break;
      case Constants.REJECT_REQUEST:
        this.router.navigate(['/rejectRequest']);
        break;
      default:
        this.router.navigate(['/home']);
    }

  }

}
