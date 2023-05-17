import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url='http://localhost:3000/alumni/'
  constructor(private httpClient:HttpClient) { }

  getAlumni(){
    return this.httpClient.get(this.url);
  }
}
