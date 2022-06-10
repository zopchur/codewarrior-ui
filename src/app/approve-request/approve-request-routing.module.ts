import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveRequestComponent } from './approve-request.component';

const routes: Routes = [{ path: '', component: ApproveRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproveRequestRoutingModule { }
