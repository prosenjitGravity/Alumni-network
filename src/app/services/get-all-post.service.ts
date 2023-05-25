import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllPostService {
  private url='http://localhost:3000/post/'
  constructor(private httpClient:HttpClient) { }

  
  getAllPost() : Observable<any> {
    return this.httpClient.get(this.url);
  }}
