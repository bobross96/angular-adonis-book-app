import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';

const routes: Routes = [
  {path : 'member', 
  component : MemberDashboardComponent,
  canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
