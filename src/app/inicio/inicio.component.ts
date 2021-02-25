import { Component, OnInit } from '@angular/core';

import { APIService } from '../api.service';
import {Post} from '../InterfacesTS';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  
  users = ["Bob", "Pepe", "Luis"];
  titulo:string = '';
  seleccion:string = '';

  sayHello(){
    alert("Hello world!");
  }

  deleteUser(user:string){
    for(let i = 0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }

  addUser(newUser:any){
    this.users.push(newUser.value);
    newUser.value = '';
    return false;
  }

  log(titulo:any) {
    console.log(titulo)
  }
  
  posts: Post[] = [];
  
  constructor(private apiService: APIService) { 
    this.apiService.getData().subscribe((data:any) => {
      console.log(data);
      this.posts = data;
    });
  }

  ngOnInit(): void {
  }

}
