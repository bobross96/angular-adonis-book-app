import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddComponent } from '../admin/book-add/book-add.component';
import { BookEditComponent } from '../admin/book-edit/book-edit.component';
import { MainComponent} from '../main/main.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes = [
  { path : 'books', component: BooksComponent, data : {title : 'list of books'} },
  { path : 'book-detail/:id', component : BookDetailComponent, data : {title : 'book details'}}
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
