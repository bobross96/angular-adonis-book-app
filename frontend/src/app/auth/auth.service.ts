import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  //store url
  redirectUrl : string


  constructor(private http : HttpClient) { }

  login(user:any):Observable<any>{
    return this.http.post("/api/login",user).pipe(
      tap(val => {
        if (val.loginSuccess){
          this.isLoggedIn = true
        }
      })
    )
  }


  register(user:any):Observable<any>{
    return this.http.post("/api/register",user).pipe(
      tap(val => {
        if (val.registerSuccess){
          this.isLoggedIn = true
        }
      })
    )
  }

  logout():void {
    this.isLoggedIn = false;
  }


}
