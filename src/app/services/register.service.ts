import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }
  private url='http://localhost:3000/alumni/register';
  public registerUser(data:any):Observable<any> {
    return this.httpClient.post <any>(this.url,data)
  }
}
