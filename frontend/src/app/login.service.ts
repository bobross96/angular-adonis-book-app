import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getResponse(): Observable<any> {
    return this.http.get("/api/user")
  }

  constructor(private http : HttpClient) { }
}
