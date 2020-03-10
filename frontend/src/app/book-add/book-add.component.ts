import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ApiService } from '../api.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  
  ratings = [1,2,3,4,5,6,7,8,9,10];

  submitted = false

  model = new Book()

  onSubmit():void{
    this.submitted = true
    console.log(this.submitted)
    const bookJson = {
      title : this.model.title,
      author : this.model.author,
      description : this.model.description,
      rating : this.model.rating

    }

    this.api.addBook(bookJson).subscribe((res:any)=> {
      console.log(res.data)
    }, err => {
      console.log(err);
      
    });
        

    
}
  

  constructor(private api : ApiService) { }

  ngOnInit() {
    
  }

}
