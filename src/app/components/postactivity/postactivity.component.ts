import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostActivityServiceService } from 'src/app/services/post-activity-service.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-postactivity',
  templateUrl: './postactivity.component.html',
  styleUrls: ['./postactivity.component.css']
})
export class PostactivityComponent {
public token:any;
public profile_image:any
public first_name:any;
public last_name:any;
public postForm:any;
public post_value:any;
public userid:any;
public user_role:any;

  constructor(private service:UserProfileService,private formBuilder:FormBuilder,private service2:PostActivityServiceService){}
 ngOnInit(){
  this.postForm=this.formBuilder.group({
    post:["",[Validators.required]]
  })
   this.token=localStorage.getItem('token');
   this.service.getUserWithToken(this.token)
  .subscribe((response:any)=>{
     console.log('response : ',response.msg);
     this.profile_image=response.msg.profile_image;
     this.first_name=response.msg.first_name
     this.last_name=response.msg.last_name;
     this.userid=response.msg._id;
     this.user_role=response.msg.role
     console.log("inside profile component : ",response.msg);   
  })
}
postData(){
  console.log("indide postcreate",this.postForm.value);
  this.post_value=this.postForm.value;
  this.service2.createPost(
    { userImage:this.profile_image,first_name:this.first_name,last_name:this.last_name,postDate:Date.now(), description:this.postForm.value.post,userId:this.userid,user_role:this.user_role }

  ).subscribe((response)=>{
    console.log("post activity is : ",response.msg)
  })
}
}
