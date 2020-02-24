import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User()

  onSumbit(user : User) : void {
    
  }
  
  constructor(private loginapi : LoginService) { }

  ngOnInit() {
  }

}
