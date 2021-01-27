import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import {Book} from '../../book'
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})


export class BookDetailComponent  {

  book : Book

  // function is called on init to generate the data 
  getBookDetail():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.api.getBook(id).subscribe((res: any) => {
      this.book = res.data;
      console.log(this.book);
      
    }, err => {
      console.log(err);
      
    });

  }
  constructor(private api : ApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBookDetail()
  }

}
