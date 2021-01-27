import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';


@NgModule({
  declarations: [MemberComponent, MemberDashboardComponent, ManageBooksComponent],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
