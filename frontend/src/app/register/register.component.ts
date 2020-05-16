import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService} from '../auth/login/login.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = new User()

  submitted = false
  
  ngOnInit() {
  }

  onSubmit():void{
    this.submitted = true;
    const userJson = {
      username : this.model.username,
      email : this.model.email,
      password : this.model.password
    }

    this.loginservice.registerUser(userJson).subscribe((res:any) => {
      console.log(res.data)
    }, err => {
      console.log(err);
    });

    this.loginservice.testApi().subscribe((res:any)=>{
      console.log(res.message)
    }, err => {
      console.log(err);
    })

  }

  constructor( private loginservice : LoginService) { }


}
