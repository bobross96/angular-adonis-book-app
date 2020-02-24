import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { Book } from '../book'
import { Router} from '@angular/router'
 
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book : Book

  constructor( private api : ApiService) { }


  
  ngOnInit() {
  }

}
