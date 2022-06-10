import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularBotComponent } from './angular-bot.component';

const routes: Routes = [{ path: '', component: AngularBotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularBotRoutingModule { }
