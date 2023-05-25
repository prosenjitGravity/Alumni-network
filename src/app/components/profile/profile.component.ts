import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

     public cover_image:any;
     public profile_image:any
     public first_name:any
     public last_name:any
     public gender:String='';
     public job_title:any;
     public role:any;
     public address:any

     public token:any;
     constructor(private service:UserProfileService){}
    ngOnInit(){
      this.token=localStorage.getItem('token');
      this.service.getUserWithToken(this.token)
     .subscribe((response:any)=>{
        console.log('response : ',response.msg);
        this.first_name=response.msg.first_name;
        this.last_name=response.msg.last_name;
        this.job_title=response.msg.job_title;
        this.cover_image=response.msg.cover_image;
        this.profile_image=response.msg.profile_image;
        this.role=response.msg.role
        this.address=response.msg.address;
        console.log("inside profile component : ",response.msg);   
     })
    }
    
     

    
}
