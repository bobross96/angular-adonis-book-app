import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup ({
    email : new FormControl(''),
    password : new FormControl('')
  })


  constructor(private authService : AuthService, private _router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res) => {
      if (this.authService.isLoggedIn){
        console.log(res);
        
        this._router.navigateByUrl('/member')
      }
     
      
      
      
    })
    
    
  }

}
