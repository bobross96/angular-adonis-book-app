import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddComponent } from '../admin/book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookFormComponent } from './book-form/book-form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainComponent } from '../main/main.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout'

@NgModule({
  declarations: [
    BooksComponent,
    BookDetailComponent,
    BookAddComponent,
    BookEditComponent,
    BookFormComponent,
    ReactiveFormComponent,
    RegisterComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule
    
  ]
})
export class BooksModule { }
