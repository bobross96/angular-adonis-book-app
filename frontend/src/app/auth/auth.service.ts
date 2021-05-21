import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  //store url
  redirectUrl : string


  constructor(private http : HttpClient) { }

  //login creates a new observable object, pipe and tap are methods of observables
  //tap is like a foreach for observables, 
  login(user:any):Observable<any>{
    return this.http.post("/api/login",user).pipe(
      tap(val => {
        console.log(val.status);
        if (val.status == "login success"){
          this.isLoggedIn = true
          this.setSession(val)
        }
      })
    )
  }

  checkLogin():Observable<any>{
    var header = {
      headers : new HttpHeaders()
        .set('Authorization',`Bearer ${this.getToken()}`)
    }
    return this.http.get("api/tokenCheck",header)

  }


  register(user:any):Observable<any>{
    return this.http.post("/api/register",user).pipe(
      tap(val => {
        if (val.registerSuccess){
          this.isLoggedIn = true
          this.setSession(val)
        }
      })
    )
  }

  logout():void {
    this.isLoggedIn = false;
  }

  private setSession(authResult){
    localStorage.setItem('token',authResult.data.token)
  }

  getToken(){
    if (localStorage.getItem('token')){
      return localStorage.getItem('token')
    }
    else {
      return false;
    }
  }


}
