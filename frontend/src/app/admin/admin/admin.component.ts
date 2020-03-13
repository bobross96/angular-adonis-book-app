import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  jwt : any
  constructor() { }

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt')
    
  }

}
