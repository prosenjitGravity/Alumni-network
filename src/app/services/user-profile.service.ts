import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private url:any='http://localhost:3000/alumni/my-profile';
  constructor(private http:HttpClient) { }
  getUserWithToken(token:any){
    const headers = new HttpHeaders({
      'Authorization': `${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get(this.url,{headers})
  }
}
