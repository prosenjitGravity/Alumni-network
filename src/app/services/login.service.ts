import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private url='http://localhost:3000/alumni/login';
  constructor(private httpClient:HttpClient) { }

  public loginUser(data:any): Observable<any> {
    return this.httpClient.post<any>(this.url,data)
  }
}
