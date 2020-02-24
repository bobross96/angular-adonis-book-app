import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Book} from '../book';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books : Book[]
  getBooks(): void {
    this.loginService.getResponse().subscribe(bookArray =>{
      this.books = bookArray.data
      console.log('asdasdads')
      console.log(bookArray)

    })
  }
  constructor(public loginService : LoginService) { }

  ngOnInit() {
  }

}
