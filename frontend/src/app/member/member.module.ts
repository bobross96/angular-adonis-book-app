import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';


@NgModule({
  declarations: [MemberDashboardComponent],
  imports: [
    CommonModule,
    MemberRoutingModule
  ]
})
export class MemberModule { }
