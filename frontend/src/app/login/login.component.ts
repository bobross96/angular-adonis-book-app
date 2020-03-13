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
  submitted = false

  onSubmit() : void {
    this.submitted = true;
    const userLogin = {
      email : this.model.email,
      password : this.model.password
    }

    this.loginapi.loginUser(userLogin).subscribe((res:any)=> {
      console.log(res.data)
    }, err => {
      console.log(err);
    })
  }
  
  constructor(private loginapi : LoginService) { }

  ngOnInit() {
  }

}
