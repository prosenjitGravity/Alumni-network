import { Component } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public logo:String='assets/images/nsec_logo.png'
  public department:String='';
  public token:any;
  public admission_year:number=0;
  public course_end_year:number=0;
  constructor(private service:UserProfileService){}
 ngOnInit(){
   this.token=localStorage.getItem('token');
   this.service.getUserWithToken(this.token)
  .subscribe((response:any)=>{
     console.log('response : ',response.msg);
     this.department=response.msg.department;
     this.admission_year=response.msg.admission_year;
     this.course_end_year=response.msg.course_end_year;
     console.log("inside profile component : ",response.msg);   
  })
 }
}
