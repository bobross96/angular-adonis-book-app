import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BooksComponent} from './book/books/books.component';
import { BookAddComponent} from './book/book-add/book-add.component';
import { BookDetailComponent} from './book/book-detail/book-detail.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component'; 



const routes: Routes = [
  
  { path : '' , component : LoginComponent},
  { path : '**', component : PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
