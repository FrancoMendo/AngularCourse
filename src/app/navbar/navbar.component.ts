import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  buttons = [
    {
     tag:"Home",
     link: "home",
    },
    {
      tag:"Profile",
      link: "profile",
     },
     {
      tag:"More",
      link: "asd",
     }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
