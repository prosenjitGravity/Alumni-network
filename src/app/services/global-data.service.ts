import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
public profileinfo:any=[];
  constructor() { }

  setUserData(info:any){
    this.profileinfo=info;
  }
  getUserData(){
    return this.profileinfo;
  }
}
