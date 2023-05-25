import { Component } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.css']
})
export class HelpPageComponent {
  public help:String='assets/images/help_page.png'
  public userName:String='Einstein'
  public token:any;
 constructor(private service:UserProfileService){}
 ngOnInit(){
   this.token=localStorage.getItem('token');
   this.service.getUserWithToken(this.token)
  .subscribe((response:any)=>{
     console.log('response : ',response.msg);
     this.userName=response.msg.first_name;
     console.log("inside profile component : ",response.msg);   
  })
}
}
