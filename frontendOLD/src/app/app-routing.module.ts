import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'; 
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  
  { path : '' , component : LoginComponent},
  { path : 'register', component : RegisterComponent},
  { path : '**', component : PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
