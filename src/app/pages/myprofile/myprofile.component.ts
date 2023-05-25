import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  public token:any;
  public first_name:string='';
  public last_name:string='';
  public role:string='';
  public job_title:string='';
  public about:string='';
  public admission:number=0;
  public final_year:number=0;
  public department:string=''
  public profileinfo:any=[];

   @Input()
   user:any;
   constructor(private service:UserProfileService,private global_service:GlobalDataService){}
   ngOnInit(): void {
     let data:any=localStorage.getItem('user')
     console.log('data : ',JSON.parse(data))
     console.log(localStorage.getItem('token'))
     this.token=localStorage.getItem('token');
    //  

     this.service.getUserWithToken(this.token)
     .subscribe((response:any)=>{
        console.log('response : ',response.msg);
        this.first_name=response.msg.first_name;
        this.last_name=response.msg.last_name;
        this.profileinfo=response.msg;
        this.global_service.setUserData(this.profileinfo)
     })
   }
}
