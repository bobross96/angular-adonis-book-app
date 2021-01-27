import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { MemberComponent } from './member/member.component';
import {AuthGuard} from '../auth/auth.guard';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';


const adminRoutes: Routes = [
  {path : 'member', component : MemberComponent, 
  canActivate: [AuthGuard],
  children : [
      {path : '', 
      canActivateChild : [AuthGuard],
      children : [
          {path : 'dashboard' , component : MemberDashboardComponent},
          {path : 'manage-books', component : ManageBooksComponent},
          {path : 'book-add', component : BookAddComponent},
          {path : 'book-edit/:id', component : BookEditComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
