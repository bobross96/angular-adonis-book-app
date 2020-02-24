import { Component, OnInit ,Input} from '@angular/core';
import {Book} from '../book'
import {ApiService} from '../api.service'
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  model = new Book() 

  ratings = [1,2,3,4,5,6,7,8,9,10]


  deleted = false;
  edited = false;

  constructor(private api : ApiService,
              private route : ActivatedRoute) { }

    getBookDetail():void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.api.getBook(id).subscribe((res: any) => {
        this.model = res.data;
        console.log(this.model.author);
        
      }, err => {
        console.log(err);
        
      });
    }

    deleteBook():void {
      this.deleted = true
      const id = +this.route.snapshot.paramMap.get('id');
      this.api.deleteBook(id).subscribe((res : any) => {
        console.log(res.message)
      })
    }

    onSubmit():void{
      this.edited = true
      const bookJson = {
        title : this.model.title,
        author : this.model.author,
        description : this.model.description,
        rating : this.model.rating,
      }

      const id = +this.route.snapshot.paramMap.get('id');
  
      this.api.updateBook(bookJson, id).subscribe((res:any)=> {
        console.log(res.data)
      }, err => {
        console.log(err);
        
      });
    }

  ngOnInit() {
    this.getBookDetail()
    
    
  }

}
