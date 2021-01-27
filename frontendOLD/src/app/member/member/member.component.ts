import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  jwt : any
  constructor() { }

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt')
    
  }

}
