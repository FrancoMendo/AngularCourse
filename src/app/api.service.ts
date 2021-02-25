import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './InterfacesTS';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {
    console.log("Service working");
    
  }

  getData(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
