import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BooksComponent} from './books/books.component';
import { BookAddComponent} from './book-add/book-add.component'
import { BookDetailComponent} from './book-detail/book-detail.component'
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path : 'main', component : MainComponent},
  { path : 'books', component : BooksComponent, data : {title : 'list of books'}},
  { path : 'book-detail/:id', component : BookDetailComponent, data: {title: 'book detail'}},
  { path : 'book-add', component : BookAddComponent, data : {title : 'add a book'}},
  { path : 'book-edit/:id', component : BookEditComponent, data : {title : 'edit a book'}},
  { path : 'login' , component : LoginComponent},
  {path : '',component : RegisterComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
