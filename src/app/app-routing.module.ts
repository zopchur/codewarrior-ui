import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'home',
  component: HomeComponent,
},
{ path: 'angular-bot', loadChildren: () => import('./angular-bot/angular-bot/angular-bot.module').then(m => m.AngularBotModule) },
{
  path: 'pendingRequest', loadChildren: () => import('./pending-request/pending-request.module').then(m => m.PendingRequestModule),
  canActivate: [AuthGuard]
},
{
  path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate: [AuthGuard]
},
{
  path: 'approveRequest', loadChildren: () => import('./approve-request/approve-request.module').then(m => m.ApproveRequestModule),
  canActivate: [AuthGuard]
},
{
  path: 'rejectRequest', loadChildren: () => import('./reject-request/reject-request.module').then(m => m.RejectRequestModule),
  canActivate: [AuthGuard]
},
{
  path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
