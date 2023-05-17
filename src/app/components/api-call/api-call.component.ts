import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit{
  users:any;
  constructor(private service:UserService){}
  ngOnInit(): void {
      this.service.getAlumni()
      .subscribe( (response:any)=>{
        this.users=response.msg;
        console.log(this.users);
      })
      
  } 
}
