import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Book} from './book';
import { User } from './user';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "/api/register"
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user : User
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getResponse(): Observable<any> {
    return this.http.get("/api/register")
  }

  testApi():Observable<any>{
   
    return this.http.get("/api/test")
  }

  registerUser(user : User): Observable<any>{
    console.log(user)
    return this.http.post<any>("/api/register",user,httpOptions)
    .pipe(
      tap(()=> console.log('registered user')),
      catchError(this.handleError('registerUser',[]))
    )
  }

  loginUser(user): Observable<any>{
    return this.http.post<any>("/api/login",user)
    .pipe(
      tap(()=> console.log('user login')),
      catchError(this.handleError('loginUser',[]))
    )
  }
  constructor(private http : HttpClient) { }
}
