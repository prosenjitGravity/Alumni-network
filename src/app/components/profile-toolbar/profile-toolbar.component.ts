import { Component,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-profile-toolbar',
  templateUrl: './profile-toolbar.component.html',
  styleUrls: ['./profile-toolbar.component.css']
})
export class ProfileToolbarComponent {
  public name:String='Merida'
  public user_image:String="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg ";
  isSticky: boolean = false;
  constructor(private router:Router, private service:UserProfileService){}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 80;
  }
  logout(){
    localStorage.clear();
    alert("logout successfully");
    this.router.navigateByUrl("/")
  }
  public first_name:any="Merida"
  public last_name:any="Avatar"
  public gender:String=""
  public cover_image:any;
  public profile_image:any
  public job_title:any;

  public token:any;

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
     console.log("inside profile component : ",response.msg);   
  })
}
}

